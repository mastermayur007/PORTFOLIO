import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                A Little About Me
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Curious mind.
                <span className="block text-blue-600">
                  Always building.
                </span>
              </h2>

              <p className="mt-6 leading-relaxed text-slate-600">
                I'm Mayur, a Technical Support Engineer who enjoys
                understanding technology, solving technical problems,
                and exploring new ways to build useful digital products.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                My interests include IT infrastructure, web development,
                automation, cloud technologies, and photography.
                I believe consistent learning and practical experience
                are the foundation of meaningful growth.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                Let's Connect →
              </a>
            </div>

            {/* Right Content */}
            <div className="grid grid-cols-2 gap-4">

              <div className="about-stat">
                <p className="text-3xl font-bold text-slate-900">
                  IT
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Technical Support
                </p>
              </div>

              <div className="about-stat">
                <p className="text-3xl font-bold text-slate-900">
                  Web
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Development
                </p>
              </div>

              <div className="about-stat">
                <p className="text-3xl font-bold text-slate-900">
                  AI
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Automation
                </p>
              </div>

              <div className="about-stat">
                <p className="text-3xl font-bold text-slate-900">
                  ∞
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Learning Mindset
                </p>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;