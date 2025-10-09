'use client';

import React, { useState, useEffect, useRef } from 'react';

const COMMANDS = {
  help: `Comandos disponíveis:
- help: mostra esta ajuda
- about: mostra informações sobre o perfil
- projects: lista projetos
- contact: informações de contato`,
  about: `Olá! Sou 0xguidev, desenvolvedor full-stack apaixonado por tecnologia e inovação.`,
  projects: `Projetos:
- Projeto 1: Sistema de Pesquisa
- Projeto 2: Portfólio Pessoal
- Projeto 3: Blog Técnico`,
  contact: `Contato:
- Email: contato@0xguidev.com
- LinkedIn: linkedin.com/in/0xguidev
- GitHub: github.com/0xguidev`,
};

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase() as keyof typeof COMMANDS;
    if (COMMANDS[command]) {
      setHistory((prev) => [...prev, `> ${command}`, COMMANDS[command]]);
    } else {
      setHistory((prev) => [
        ...prev,
        `> ${command}`,
        `Comando não reconhecido: ${command}`,
      ]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-lg max-w-xl mx-auto min-h-[300px] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-2">
        {history.map((line, idx) => (
          <pre key={idx} className="whitespace-pre-wrap">
            {line}
          </pre>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex">
        <span className="mr-2 text-green-500">{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-black flex-1 outline-none text-green-400 font-mono"
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal input"
        />
      </form>
    </div>
  );
}
