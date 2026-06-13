import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../constants";

const Footer = () => (
  <footer className="bg-black-100 border-t border-[#2a2460]">
    <div className="max-w-7xl mx-auto px-6 sm:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-secondary text-[14px] text-center sm:text-left">
        © {new Date().getFullYear()} Pramuditha Gunaratne. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
