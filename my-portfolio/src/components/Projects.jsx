import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Things I've Built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-slate-600">
            A collection of projects focused on solving problems
            through technology and creativity.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group"
            >

              {/* Project Preview */}
              <div className="project-preview">

                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-category">
                  Featured Project
                </span>

                <div className="project-preview-content">
                  <span className="text-5xl font-bold text-white/90">
                    {index === 0 ? "ITAM" : "SaaS"}
                  </span>
                </div>

              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-8 flex items-center gap-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;