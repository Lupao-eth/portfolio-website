// app/context/ThemeContext.tsx
"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the shape of our context value
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light'; // Default for SSR
  });

  // Apply theme class to the document body whenever theme changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement; // This is the <html> tag
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme); // Save theme to localStorage
    }
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};