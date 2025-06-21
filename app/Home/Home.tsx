"use client";

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

export default function HomeSection() {
  return (
    <section
      id="Home1"
      style={{
        width: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '1rem',
        paddingBottom: '5rem',
        fontFamily: 'var(--font-geist-mono)',
        color: 'var(--text-color)',
        backgroundColor: 'var(--bg-color)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: 'inherit',
        }}
      >
        Hello, I&apos;m Paulo Saclolo
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: '1rem',
          borderBottom: '2px solid var(--link-underline-color)',
          marginBottom: '1rem',
          width: 'fit-content',
          minWidth: '200px',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          <a
            href="https://github.com/Lupao-eth"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '2rem',
              color: 'var(--text-color)',
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#000000')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-color)')}
            aria-label="GitHub Profile"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://ph.jobstreet.com/profile/paulo-saclolo-DTCtGr97z0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '2rem',
              color: 'var(--text-color)',
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#007bff')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-color)')}
            aria-label="JobStreet Profile"
          >
            <AiFillLinkedin />
          </a>

          <a
            href="https://discord.gg/wHCtxt9W"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '2rem',
              color: 'var(--text-color)',
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#5865F2')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-color)')}
            aria-label="Discord Profile"
          >
            <FaDiscord />
          </a>
        </div>
      </div>

      <p
        style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: 'var(--text-color)',
        }}
      >
        Status:{' '}
        <span
          className="blinking-text"
          style={{ color: '#FF0000' }}
        >
          Unemployed
        </span>
      </p>

      {/* ✅ Resume Download Section */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            marginBottom: '0.5rem',
          }}
        >
          Download my resume below
        </p>
        <a
          href="/Projects/Pau-resume.pdf"
          download
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
