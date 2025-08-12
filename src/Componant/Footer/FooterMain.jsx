import { Link } from "react-scroll";
// You can add social media icons like this:
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <footer className="bg-[#0f0f0f] px-4 text-lightGrey">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700 mt-24" />

      {/* Footer content */}
      <div className="max-w-[1200px] mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:flex justify-between items-center gap-6">
        {/* Logo / Title */}
        <p className="text-2xl font-semibold text-white">
          RaselMahmud Portfolio
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-4 text-lg">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-xl text-gray-400">
          <a
            href="https://github.com/rm404085/PH-Tour-Management-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="max-w-[1200px] mx-auto text-center text-sm text-lightBrown pb-8">
        © {new Date().getFullYear()} RaselMahmud | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;
