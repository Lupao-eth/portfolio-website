"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPython,
  FaCode,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { ReactElement } from "react";

interface SkillBoxProps {
  icon: ReactElement;
  name: string;
}

function SkillBox({ icon, name }: SkillBoxProps) {
  return (
    <div className="skill-box">
      {icon}
      <span className="skill-label">{name}</span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about1" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Bachelor of Industrial Technology degree holder with experience in database systems,
          web development, and various programming languages. Strong logical thinking and
          problem-solving skills, with a profound interest in applying these technical abilities
          to grow into a professional programmer within a collaborative environment.
        </p>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
          <div className="skills-grid">
            <SkillBox icon={<FaHtml5 size={70} color="#e44d26" />} name="HTML" />
            <SkillBox icon={<FaCss3Alt size={70} color="#264de4" />} name="CSS" />
            <SkillBox icon={<FaJs size={70} color="#f0db4f" />} name="JavaScript" />
            <SkillBox icon={<SiMysql size={70} color="#00758F" />} name="MySQL" />
            <SkillBox icon={<FaLaravel size={70} color="#F05340" />} name="Laravel" />
            <SkillBox icon={<FaPython size={70} color="#306998" />} name="Python" />
            <SkillBox icon={<FaReact size={70} color="#61DBFB" />} name="React" />
            <SkillBox icon={<FaCode size={70} color="#00599C" />} name="C++" />
            <SkillBox icon={<FaCode size={70} color="#00599C" />} name="C#" />
          </div>
        </div>
      </div>
    </section>
  );
}
