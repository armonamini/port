export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Company Name',
      date: '2023 - Present',
      bullets: [
        'Developed and maintained critical infrastructure systems',
        'Collaborated with cross-functional teams to deliver scalable solutions',
        'Implemented security best practices in network architecture',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'Previous Company',
      date: '2021 - 2023',
      bullets: [
        'Built responsive web applications using modern frameworks',
        'Participated in code reviews and agile development processes',
        'Contributed to open-source projects and internal tooling',
      ],
    },
    {
      role: 'Intern',
      company: 'Startup Inc',
      date: '2020 - 2021',
      bullets: [
        'Assisted in developing frontend components',
        'Learned industry-standard development practices',
        'Supported team in debugging and testing applications',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-experience">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-16">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article key={index} className="relative pl-8">
              {/* Subtle vertical accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px bg-accent"
                style={{ opacity: 0.17 }}
              />
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-base text-accent mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-sans text-sm text-text-primary/70">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-2 pt-2">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="font-sans text-base text-text-primary/90 leading-relaxed flex items-start"
                    >
                      <span className="mr-3 text-accent" style={{ opacity: 0.5 }}>
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
