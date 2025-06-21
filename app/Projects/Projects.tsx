import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="prokos" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-box">
          <Image
            src="/Projects/project-1.png"
            alt="Project One"
            width={600}
            height={400}
            className="project-image"
          />
          <h3 className="project-title">I-Blast System</h3>
          <p className="project-desc">
            I was directly responsible for developing and maintaining the BLAST SMS system used by our organization.
            I integrated Movider and Diafaan as SMS gateways, set up the automation logic for message dispatch, and built features to handle bulk sending, error logging, and delivery tracking.
            This system was designed to send SMS messages efficiently to our entire contact database across the Philippines.
            My work ensured faster delivery times, improved reliability, and reduced manual workload in our communication process.
            <br />
            <br />
            <strong>Note:</strong> I&apos;m unable to provide a live demo or code sample, as the system is internal and access is restricted.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <Image
            src="/Projects/project-2.png"
            alt="Project Two"
            width={600}
            height={400}
            className="project-image"
          />
          <h3 className="project-title">TripTask (Personal Project)</h3>
          <p className="project-desc">
            <strong>TripTask - Local Rider Booking Service</strong>
            <br />
            <br />
            TripTask is a local rider service platform that allows users to book and chat with riders directly through the app.
            I personally created this project with the goal of turning it into a potential source of income.
            It&apos;s designed specifically for local use and includes three main components: a customer app, a rider app, and an admin panel.
            <br />
            <br />
            I built this using <strong>React Native</strong> and <strong>Expo</strong>. Although the mobile apps aren&#39;t deployed yet due to subscription requirements,
            the system is fully functional and ready for production once published.
            <br />
            <br />
            You can preview the website here:
            <br />
            🔗{" "}
            <a href="https://lupao-eth.github.io/trip-task/" target="_blank" rel="noopener noreferrer">
              https://lupao-eth.github.io/trip-task/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
