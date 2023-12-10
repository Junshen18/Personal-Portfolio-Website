import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";
import { Quicksand } from 'next/font/google'
 
const quicksand = Quicksand({
  weight: '700',    
  subsets: ['latin'],
})


const EmailSection = () => { 


    return (
        <main className={`grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative m-14 ${quicksand.className}`} id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2 ">Let us Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
                </p>
                <h4 className="pb-3 mt-6">Let us get in touch!</h4>
                <div className=" flex flex-row gap-8 mt-6">
                    <Link href="https://github.com/Junshen18"
                    target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/wong-jun-shen-03157217b/"
                    target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                        
                    </Link>
                    <Link href="https://www.instagram.com/junshen1._.8/" className="mt-1"
                    target="_blank" rel="noopener noreferrer">
                        <Image src={InstagramIcon}/>
                    </Link>
                    <Link href="mailto:junshenhere@gmail.com" className="mt-1"
                    target="_blank" rel="noopener noreferrer">
                        <Image src={GmailIcon}/>
                    </Link>

                </div>
            </div>
        </main>
    );
};

export default EmailSection;