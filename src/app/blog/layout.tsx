import React from 'react';

export const metadata = {
  title: 'Blog - 0xguidev',
  description: 'Blog page',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="blog-layout p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {children}
    </section>
  );
}
