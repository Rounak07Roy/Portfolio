import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center items-center">
        {/* <span>LOGO</span> */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
      <div className="socials flex flex-row gap-2 justify-center items-center ">
          <Link href="https://github.com/Rounak07Roy">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/rounak-roy-34789934b/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
    </footer>
  );
};
export default Footer;

