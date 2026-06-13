import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  media,
  source_code_link,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: media.length > 1 });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setCurrentSlide(emblaApi.selectedScrollSnap() + 1);
    });
  }, [emblaApi]);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        max={5}
        scale={1}
        speed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-full w-full"
      >
        {media.length > 0 ? (
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {media.map((item, mediaIndex) =>
                  item.type === "video" ? (
                    <div key={mediaIndex} className="flex-none w-full min-w-0">
                      <VideoWithPlayButton videoSrc={item.url} />
                    </div>
                  ) : (
                    <div
                      key={mediaIndex}
                      className="flex-none w-full min-w-0 relative aspect-video"
                    >
                      <img
                        src={item.url}
                        alt={`project_media_${mediaIndex}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {media.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                  aria-label="Next slide"
                >
                  <FaChevronRight size={12} />
                </button>
              </>
            )}

            <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-sm">
              {currentSlide}/{media.length}
            </div>
          </div>
        ) : (
          <div className="relative w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
            <p>No media available</p>
          </div>
        )}

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex items-center justify-between gap-2">
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
      </Tilt>
    </motion.div>
  );
};

const VideoWithPlayButton = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full aspect-video">
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
          <div className="bg-black/50 w-16 h-16 rounded-full flex justify-center items-center">
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

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
