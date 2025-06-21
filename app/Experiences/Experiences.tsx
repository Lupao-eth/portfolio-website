"use client";
import { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image

const certificates = [
  {
    src: "/certificates/ojt-cert.jpg",
    title: "Certificate of Completion - On-The-Job Training",
    width: 600,
    height: 400,
  },
  {
    src: "/certificates/c-sharp.png",
    title: "Certification of Completion - Foundational C# with Microsoft",
    width: 600,
    height: 400,
  },
];

export default function ExperiencesSection() {
  const [currentCert, setCurrentCert] = useState(0);

  const prevCert = () => {
    setCurrentCert((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };
  const nextCert = () => {
    setCurrentCert((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const currentCertificate = certificates[currentCert];

  return (
    <section id="expko" className="experiences-section">
      <div className="container">
        <div className="left-side">
          <h3 className="section-subtitle">Education</h3>
          <ul className="education-list">
            <li>
              Bachelor of Industrial Technology Major in Computer Technology - Bulacan State University (2023 - 2024)
            </li>
            <li>
              Science, Technology, Engineering, & Mathematics STEM - Dr. Yangas Colleges (2019 - 2021)
            </li>
          </ul>

          <h3 className="section-subtitle certificates-title">Certificates</h3>
          <div className="certificate-carousel">
            <button onClick={prevCert} aria-label="Previous certificate" className="arrow-btn left-arrow">
              &#8592;
            </button>
            <div className="certificate-image-wrapper" key={currentCert}>
              <Image
                src={currentCertificate.src}
                alt={currentCertificate.title}
                width={currentCertificate.width}
                height={currentCertificate.height}
                className="certificate-image"
              />
              <p className="certificate-title">{currentCertificate.title}</p>
            </div>
            <button onClick={nextCert} aria-label="Next certificate" className="arrow-btn right-arrow">
              &#8594;
            </button>
          </div>
        </div>

        <div className="right-side">
          <h3 className="section-subtitle">Experiences</h3>
          <ul className="experience-list">
            <li>
              <strong>Philippine National Police: Web Developer (2024 - 2025) - On The Job Training</strong>
              <ul className="sub-list">
                <li>Built a special and private web system using Laravel</li>
                <li>Optimizing the web server handling millions of records across the Philippines</li>
                <li>Designing the Web</li>
              </ul>
            </li>
            <li>
              <strong>Philippine National Police: Database SQL (2024 - 2025) - On The Job Training</strong>
              <ul className="sub-list">
                <li>Optimized and indexed over 250 million records using MySQL</li>
                <li>Data manipulation</li>
                <li>Imported data into server</li>
              </ul>
            </li>
            <li>
              <strong>Development of Arduino Based Algae Detecting System (2024)</strong>
              <ul className="sub-list">
                <li>Built sensor and programmed it using Arduino</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
