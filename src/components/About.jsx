import React, { useRef } from "react";
import { motion } from "motion/react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tilt = ({ className, children, max = 15, scale = 1.05, speed = 400 }) => {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * max}deg) rotateY(${x * max}deg) scale(${scale})`;
    el.style.transition = `transform ${speed}ms ease-out`;
  };
  const handleMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };
  return (
    <div ref={ref} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full" max={45} scale={1} speed={500}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px]"
      >
        I’m a passionate Software Engineer experienced in building scalable
        solutions for software projects. As a Computer Engineering graduate and
        a self-motivated learner, I stay updated with the latest tech trends and
        continuously explore new frameworks to contribute to innovative projects
        and deliver top-tier applications.
      </motion.p>
      <p className={`pt-6 ${styles.sectionSecondaryText}`}>
        Areas of interest,
      </p>

      <div className="mt-20 flex flex-wrap justify-around gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
