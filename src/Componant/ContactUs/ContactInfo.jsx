import { HiOutlineMail } from "react-icons/hi";
import SingleInfo from "./SingleInfo";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="rm404085@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+8801792540387" Image={FiPhone} />
      <SingleInfo text="Uttara, Dhaka, BANGLADESH" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;