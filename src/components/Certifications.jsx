import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  name,
  avatar,
  institute,
  outcomes,
  issueDate,
  url,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-2xl w-full mb-4"
  >
    <div className="flex items-center gap-4">
      <img
        src={avatar}
        alt={`${name} logo`}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-white font-semibold text-[22px]">{name}</h3>
        <p className="text-secondary text-[14px]">{institute}</p>
      </div>
    </div>
    <p className="text-white mt-4 text-[16px]">{outcomes}</p>
    <p className="text-secondary mt-2 text-[12px]">Issued: {issueDate}</p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-4 inline-block"
    >
      View Certification
    </a>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-12 rounded-[20px]`}>
      <div
        // className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        className={` rounded-2xl ${styles.paddingY} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={` ${styles.sectionSubText} text-center`}>
            My Accomplishments
          </p>
          <p className={` ${styles.sectionHeadText} text-center`}>
            Certifications.
          </p>
        </motion.div>
      </div>
      <div className={`mt-5 bg-tertiary  rounded-[20px]`}>
        <div
          className={`-mt-20 pb-14 pt-14 ${styles.paddingX} flex flex-col flex-wrap gap-7`}
        >
          {certifications.map((certification, index) => (
            <CertificationCard key={index} index={index} {...certification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "Certifications");
