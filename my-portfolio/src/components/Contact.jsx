function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center animate-fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Have an opportunity, project idea, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          <a
            href="techspot580@outlook.com"
            className="contact-card animate-fade-up"
          >
            <span className="text-3xl">✉️</span>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Email
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Send me an email
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/mayur-satkar-00b08b250/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card animate-fade-up"
          >
            <span className="text-3xl">💼</span>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Connect professionally
            </p>
          </a>

          <a
            href="https://github.com/mastermayur007"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card animate-fade-up"
          >
            <span className="text-3xl">💻</span>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Explore my projects
            </p>
          </a>

        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-xl md:p-12 animate-fade-up">

          <h3 className="text-2xl font-bold md:text-3xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Let's discuss your idea and build something meaningful together.
          </p>

          <a
            href="mailto:techspot580@outlook.com"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100"
          >
            Start a Conversation →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;