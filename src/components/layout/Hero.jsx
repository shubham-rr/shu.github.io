export default function Hero({ leftContent, rightContent }) {

  return (
    <div>
    <section className="flex flex-col md:flex-row items-center md:items-start w-[95%] mx-auto py-10">
      {/* Left side */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
        {leftContent}
      </div>

      {/* Right side */}
      <div className="md:w-2/3">{rightContent}</div>
    </section>
    </div>
  )
}
