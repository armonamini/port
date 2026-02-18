export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      tags: ['React', 'TypeScript', 'Next.js'],
      date: '2024',
      description: 'A placeholder project description showcasing technical skills and problem-solving approach.',
    },
    {
      title: 'Project 2',
      tags: ['Python', 'Django', 'PostgreSQL'],
      date: '2024',
      description: 'Another placeholder project highlighting backend development and database design capabilities.',
    },
    {
      title: 'Project 3',
      tags: ['Node.js', 'Express', 'MongoDB'],
      date: '2023',
      description: 'A third placeholder project demonstrating full-stack development and API design expertise.',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-16">
          Projects
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={index} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                <span className="font-sans text-sm text-text-primary/70">
                  {project.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-sans text-xs text-accent border border-accent/20 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-sans text-base md:text-lg text-text-primary/90 leading-relaxed max-w-3xl pt-2">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
