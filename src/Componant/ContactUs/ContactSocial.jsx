import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import SingleContactSocial from "./SingleContactSocial";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/rasel-mahmud-1ab0b5333/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/rm404085" Icon={FaGithub} />
      <SingleContactSocial link="https://www.facebook.com/mdrasel.mahmud.16568548" Icon={FaFacebook} />
      <SingleContactSocial link="#" Icon={FaWhatsapp} />
    </div>
  );
};

export default ContactSocial;