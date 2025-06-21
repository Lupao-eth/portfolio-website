import HomeSection from "./Home/Home";
import AboutSection from "./About/About";
import ExperiencesSection from "./Experiences/Experiences";
import ProjectsSection from "./Projects/Projects";
import ContactSection from "./Contact/Contact";


export default function Page() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <HomeSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
