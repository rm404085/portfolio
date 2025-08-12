import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import SingleContactSocial from "./SingleContactSocial";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="#" Icon={FaGithub} />
      <SingleContactSocial link="#" Icon={FaFacebook} />
      <SingleContactSocial link="#" Icon={FaWhatsapp} />
    </div>
  );
};

export default ContactSocial;