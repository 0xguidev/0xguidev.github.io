#!/bin/bash

set -e

echo "Instalando dependências..."
npm install

echo "Executando testes..."
npm test

echo "Construindo o projeto..."
npm run build

echo "Verificando se há mudanças..."
if git diff --quiet && git diff --staged --quiet; then
  echo "Nenhuma mudança para commitar. Faça mudanças no código primeiro."
  exit 1
fi

echo "Commitando mudanças..."
git add .
git commit -m "Deploy to GitHub Pages"

echo "Pushing para main..."
git push origin main

echo "Deploy iniciado. O workflow do GitHub Actions fará o deploy para GitHub Pages."
