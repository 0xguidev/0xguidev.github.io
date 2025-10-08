'use client';

import { useState } from 'react';

export function Projects({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    stack: string[];
    github: string;
    demo: string | null;
  }[];
}) {
  const [filter, setFilter] = useState<string>('');

  const filteredProjects = filter
    ? projects.filter((project) => project.stack.includes(filter))
    : projects;

  const allStacks = Array.from(new Set(projects.flatMap((p) => p.stack)));

  return (
    <section id="projetos" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>

      <div className="mb-6">
        <label className="block mb-2">Filtrar por stack:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Todos</option>
          {allStacks.map((stack) => (
            <option key={stack} value={stack}>
              {stack}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.title} className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-medium mb-1">Stack:</h4>
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={project.github}
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-green-600 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
