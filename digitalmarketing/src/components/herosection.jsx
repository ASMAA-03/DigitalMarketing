// app/components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section
      className="
      relative
      h-screen
      bg-cover
      bg-center
      bg-no-repeat
      overflow-hidden
    "
      style={{
        backgroundImage:
          "url('/images/the-home-page-background.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* content */}
      <div
        className="
        relative z-10
        top-[90px]
        left-[50px]

        max-md:left-0
        max-md:px-6
        max-md:top-[120px]
      "
      >
        <h1
          className="
          text-white
          text-[4.5rem]
          leading-[1.1]
          font-bold
          mb-6

          max-md:text-[2.2rem]
        "
        >
          Digital Marketing
          <br />
          Services
        </h1>

        <p
          className="
          text-[#fef0d8]
          text-[1.5rem]
          leading-[35px]
          tracking-wide

          max-w-[700px]

          max-md:text-[1rem]
          max-md:leading-[28px]
          max-md:max-w-full
        "
        >
          Boost your brand’s online presence with our tailored
          digital marketing strategies.
        </p>

        <button
          className="
          mt-7
          border-none
          rounded-[15px]
          text-[1rem]
          bg-white
          text-black

          w-[10vw]
          min-w-[150px]
          py-[10px]

          transition-all
          duration-700

          hover:shadow-[-2px_6px_15px_rgb(251,251,251)]
          hover:opacity-90
          hover:w-[20vw]

          max-md:w-[120px]
          max-md:min-w-[120px]
          max-md:text-[0.7rem]
          max-md:hover:w-[140px]
        "
        >
          Learn More
        </button>
      </div>
    </section>
  );
}