'use client';

import { useState } from 'react';
import { translations } from '@/lib/translations';

export function About({
  bio,
  skills,
  career,
}: {
  bio: string;
  skills: string[];
  career: {
    year: string;
    title: string;
    company: string;
    description: string;
  }[];
}) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  return (
    <section id="sobre" className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{translations.about.title}</h2>
      <p className="mb-6">{bio}</p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">
          {translations.about.skillsTitle}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          {translations.about.careerTitle}
        </h3>
        <div className="space-y-4">
          {career.map((item) => (
            <div key={item.year} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">
                {item.year} - {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
