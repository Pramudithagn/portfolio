import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "motion/react";

import "react-vertical-timeline-component/style.min.css";
import { FiExternalLink } from "react-icons/fi";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div className="flex items-center justify-between flex-wrap gap-2 mt-1">
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.url ? (
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
              >
                {experience.company_name}
                <FiExternalLink size={13} />
              </a>
            ) : (
              experience.company_name
            )}
          </p>
          <span className="text-[12px] text-secondary bg-tertiary px-3 py-1 rounded-full border border-[#2a2460]">
            {experience.date}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-6">
        {experience.projects.map((project, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-white font-semibold text-[15px]">
                {project.name}
              </p>
              {project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {project.link.label}
                  <FiExternalLink size={11} />
                </a>
              )}
            </div>
            <p className="text-secondary text-[13px] italic mt-1">
              {project.description}
            </p>
            {project.previewLinks && (
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-secondary text-[11px]">e.g.</span>
                {project.previewLinks.map((pl, plIdx) => (
                  <a
                    key={plIdx}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] bg-[#2a2460] text-blue-300 hover:text-white px-2 py-0.5 rounded-full transition-colors duration-200"
                  >
                    {pl.label}
                    <FiExternalLink size={10} />
                  </a>
                ))}
                <span className="text-secondary text-[11px]">& more</span>
              </div>
            )}
            <ul className="mt-2 list-disc ml-5 space-y-1">
              {project.points.map((point, pIdx) => (
                <li
                  key={pIdx}
                  className="text-white-100 text-[13px] pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              <span className="text-secondary text-[12px] font-bold mr-1">Tech:</span>
              {project.techStack.split(", ").map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] bg-[#2a2460] text-blue-300 px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col lg:-mx-24 xl:-mx-44">
        <VerticalTimeline className="!max-w-none">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
