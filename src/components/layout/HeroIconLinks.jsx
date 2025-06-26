import { FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa"

export default function HeroIconLinks({ links }) {
  return (
    <div className="flex space-x-4">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}
