'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact({
  socialLinks,
}: {
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Note: Replace with your actual EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Entre em contato comigo através do formulário ou redes sociais.
          </p>
          <div className="space-y-2">
            <a href={socialLinks.github} className="block hover:underline">
              GitHub: {socialLinks.github}
            </a>
            <a href={socialLinks.linkedin} className="block hover:underline">
              LinkedIn: {socialLinks.linkedin}
            </a>
            <a href={socialLinks.twitter} className="block hover:underline">
              Twitter: {socialLinks.twitter}
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="block hover:underline"
            >
              Email: {socialLinks.email}
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border rounded p-2"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>
          {status === 'success' && (
            <p className="text-green-600">Mensagem enviada com sucesso!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">
              Erro ao enviar mensagem. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
