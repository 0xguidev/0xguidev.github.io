import Link from 'next/link';

export function Blog() {
  // Placeholder for blog posts - in a real app, fetch from content folder
  const posts = [
    {
      slug: 'introducao-react',
      title: 'Introdução ao React',
      excerpt: 'Aprenda os conceitos básicos do React...',
      date: '2023-10-01',
      tags: ['React', 'JavaScript'],
    },
    {
      slug: 'nextjs-guia',
      title: 'Guia Completo do Next.js',
      excerpt: 'Tudo que você precisa saber sobre Next.js...',
      date: '2023-09-15',
      tags: ['Next.js', 'React'],
    },
  ];

  return (
    <section id="blog" className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Blog / Artigos</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="mb-2">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <span>{post.date}</span>
              <div className="flex gap-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
