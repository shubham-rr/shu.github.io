import Hero from "../components/layout/Hero";
import HeroImage from "../components/layout/HeroImage";
import HeroIconLinks from "../components/layout/HeroIconLinks";
import SectionWrapper from "../components/layout/SectionWrapper";
import { FaLinkedin, FaSpotify, FaGithub, FaGoodreads } from "react-icons/fa";
import workExperience from './../data/workExperience';
import academics from './../data/academics';
import certifications from './../data/certifications';
import otherExp from './../data/otherExp';

const socialLinks = [
  { href: "https://linkedin.com/in/shubham-maharjan/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://spotify.com/user/lfzkawg5ocgt3xz5uhj137b7u", label: "Spotify", Icon: FaSpotify },
  { href: "https://github.com/shubham-rr", label: "GitHub", Icon: FaGithub },
  { href: "https://goodreads.com/yu2_47", label: "Goodreads", Icon: FaGoodreads },
];

export default function Profile() {
  return (
    <div>

      <Hero
        leftContent={
          <>
            <HeroImage
              src="https://media.licdn.com/dms/image/v2/D4D03AQHKePiI2OEMdA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718307591449?e=1756339200&v=beta&t=RMNOvITJqZf_c7PIr6I8UDAyIFIYZsVd4nDdpL9dMtU"
              alt="Shubham Maharjan"
              caption="Master of Information Technology (Cyber Security)"
            />
            <HeroIconLinks links={socialLinks} />
          </>
        }
        rightContent={
          <p className="text-[var(--body-text)]">
            Welcome to my personal website.
            <br />
            <br />
            I am an international student from Nepal and have been living in Darwin, NT for two years.
            I am a tech enthusiast who strives to keep systems safe and people safe. Here, you will find an online version of my resume including hobbies and passions that aren't displayed on a traditional paper resume.
          </p>
        }
      />
      <SectionWrapper heading="Work Experience" items={workExperience} />
      <SectionWrapper heading="Academic Background" items={academics} />
      <SectionWrapper heading="Certifications" items={certifications} />
      <SectionWrapper heading="Other Experiences" items={otherExp} />
    </div>
  );
}
