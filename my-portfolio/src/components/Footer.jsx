function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Mayur<span className="text-blue-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Technology enthusiast focused on technical support,
              web development, automation, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a className="footer-link" href="#about">
                About
              </a>

              <a className="footer-link" href="#projects">
                Projects
              </a>

              <a className="footer-link" href="#photography">
                Photography
              </a>

              <a className="footer-link" href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold">Connect With Me</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:your-email@example.com"
                className="footer-link"
              >
                Email ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {currentYear} Mayur. All rights reserved.
          </p>

          <p>
            Designed and built with React.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;