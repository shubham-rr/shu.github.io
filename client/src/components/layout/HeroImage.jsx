export default function HeroImage({ src, alt, caption }) {
  return (
    <div className="flex flex-col items-center md:items-start mb-6 md:mb-4">
      <img
        src={src}
        alt={alt}
        className="w-120 h-120 object-cover mb-3"
      />
      <p className="mt-2 text-center md:text-left text-md text-[var(--muted)]">
        {caption}
      </p>
    </div>
  )
}
