function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl"></div>

      <div className="mx-auto max-w-4xl text-center">

        {/* Status Badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
          Building. Learning. Growing.
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-8xl">
          Hey, I'm Mayur.
          <span className="mt-3 block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            I build things.
          </span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Technical Support Engineer exploring web development,
          automation, cloud technologies, and creative photography.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-200"
          >
            Explore My Work ↗
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
          >
            Let's Connect
          </a>

        </div>

        {/* Small Tech Line */}
        <div className="animate-fade-up mt-16 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-widest text-slate-400">
          <span>Support</span>
          <span>•</span>
          <span>Development</span>
          <span>•</span>
          <span>Automation</span>
          <span>•</span>
          <span>Photography</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;