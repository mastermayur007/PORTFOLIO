const skills = [
  {
    title: "Full-Stack Development",
    items: ["JavaScript", "React", "Python", "REST APIs", "MySQL"],
  },
  {
    title: "Linux & Systems",
    items: [
      "Linux Administration",
      "User Management",
      "File Permissions",
      "Networking",
    ],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Apache", "Nginx"],
  },
  {
    title: "Technical Support",
    items: [
      "Troubleshooting",
      "Windows Support",
      "Printer Configuration",
      "Incident Management",
    ],
  },
];

function Skills() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Technical Skills
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Tools I Work With
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {skill.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;