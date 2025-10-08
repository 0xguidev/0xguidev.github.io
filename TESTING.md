# Testes para Setup Inicial do Portfólio

## 1. Testar Linting
- Rodar `npm run lint` para verificar se o ESLint está funcionando sem erros críticos.
- Verificar se o Prettier corrige os erros de formatação.
- Confirmar que a regra "react/react-in-jsx-scope" está desativada corretamente.

## 2. Testar Husky Pre-commit
- Fazer uma modificação simples em um arquivo .tsx ou .ts.
- Adicionar o arquivo ao git (`git add`).
- Fazer commit e verificar se o Husky executa o lint-staged e bloqueia commits com erros.

## 3. Testar Next.js
- Rodar `npm run dev` e acessar http://localhost:3000 para garantir que o servidor está rodando.
- Rodar `npm run build` para garantir que o build está funcionando.
- Rodar `npm run start` para garantir que o servidor de produção funciona.

## 4. Testar Deploy no GitHub Pages
- Verificar se o next.config.ts está configurado com `output: 'export'` e `trailingSlash: true`.
- Rodar `npm run build` e `npm run export` para gerar a pasta `out`.
- Confirmar que a pasta `out` está pronta para deploy no GitHub Pages.

## 5. Testar Tailwind CSS e shadcn/ui
- Verificar se o Tailwind está aplicando estilos corretamente.
- Verificar se os componentes do shadcn/ui estão funcionando.

## 6. Testar Vitest + RTL
- Criar um teste básico para um componente React.
- Rodar `npm test` para garantir que os testes são executados.

---

Por favor, confirme se deseja que eu execute esses testes detalhados para garantir que tudo está funcionando corretamente, ou se prefere que finalize o setup agora.
