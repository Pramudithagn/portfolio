import React, { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  media,
  source_code_link,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderSettings = {
    dots: media.length > 1,
    infinite: media.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current + 1),
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 5,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-full w-full"
      >
        {/* Carousel for Project Media */}
        {media.length > 0 ? (
          <div className="relative">
            {/* Media Slider */}
            <Slider {...sliderSettings}>
              {media.map((item, mediaIndex) =>
                item.type === "video" ? (
                  <VideoWithPlayButton key={mediaIndex} videoSrc={item.url} />
                ) : (
                  // <div key={mediaIndex} className="relative max-w-[430px] max-h-[240px]">
                  <div
                    key={mediaIndex}
                    className="relative w-full aspect-[16/9]"
                  >
                    <img
                      src={item.url}
                      alt={`project_media_${mediaIndex}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                )
              )}
            </Slider>

            {/* Slide Count Display */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded text-white text-sm">
              {currentSlide}/{media.length}
            </div>
          </div>
        ) : (
          // <div className="relative w-full h-[230px] bg-gray-200 rounded-2xl flex items-center justify-center">
          <div className="relative w-full aspect-[16/9] bg-gray-200 rounded-2xl flex items-center justify-center">
            <p>No media available</p>
          </div>
        )}

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex items-center justify-between gap-2">
              {/* <h3 className=" text-secondary font-bold text-[14px]">code:</h3> */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          </div>

          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* <div className='mt-7 absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div> */}
      </Tilt>
    </motion.div>
  );
};

// Video Component   + Button
const VideoWithPlayButton = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    // <div className="relative w-full h-[230px]">
    // <div className="relative max-w-[430px] max-h-[240px]">
    <div className="relative w-full aspect-[16/9]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        src={videoSrc}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <div
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
          onClick={handlePlay}
        >
          <div className="bg-black bg-opacity-50 w-16 h-16 rounded-full flex justify-center items-center">
            <FaPlay className="text-white text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

const Works = () => {
  return (
    <>
      {/* Works */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7'> */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
