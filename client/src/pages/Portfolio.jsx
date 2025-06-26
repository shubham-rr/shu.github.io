import Hero from "../components/layout/Hero";
import HeroImage from "../components/layout/HeroImage";
import HeroIconLinks from "../components/layout/HeroIconLinks";
import { FaLinkedin, FaSpotify, FaGithub, FaGoodreads } from "react-icons/fa";

const socialLinks = [
  { href: "https://linkedin.com/in/shubham-maharjan/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://spotify.com/user/lfzkawg5ocgt3xz5uhj137b7u", label: "Spotify", Icon: FaSpotify },
  { href: "https://github.com/shubham-rr", label: "GitHub", Icon: FaGithub },
  { href: "https://goodreads.com/yu2_47", label: "Goodreads", Icon: FaGoodreads },
];

export default function Portfolio() {
  return (
    <Hero
      leftContent={
        <>
          <HeroImage
            src=""
            alt="Shubham Maharjan"
            caption="Master of Information Technology (Cyber Security)"
          />
          <HeroIconLinks links={socialLinks} />
        </>
      }
      rightContent={
        <p className="text-[var(--body-text)]">
          Welcome to my portfolio section.
          <br />
          <br />
         While my career is primarily focused on IT and Cyber Security, I am also passionate about photography, art, and games among other things.
         </p>
      }
    />
  );
}

