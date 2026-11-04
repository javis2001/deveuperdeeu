# Deveu Perdeu — versão estática do HTML fornecido

## O que foi corrigido
O HTML original já contém o conteúdo completo da página inicial. O bundle JavaScript extraído tenta inicializar e hidratar um aplicativo React/TanStack Router de um ambiente de origem diferente, podendo gerar `Cannot set properties of undefined (setting t)` e tela branca. Esta versão remove somente os carregamentos desses scripts de runtime e de analytics associados ao ambiente de origem, mantendo o HTML, imagens, estilos, vídeo, textos e URLs de links originais.

## Publicação
**Vercel:** envie todos os arquivos para a raiz do repositório GitHub. Importe o repositório na Vercel, escolha Framework Preset: Other; sem build command; output directory: `.` (raiz).

**GitHub Pages:** publique a raiz da branch principal em Settings > Pages. Os arquivos de mídia usam caminhos relativos; porém os links absolutos para rotas como `/checkout`, `/rastreio`, `/termos` apontam para a raiz do domínio e não funcionam no subcaminho padrão de um projeto GitHub Pages. Para rotas e checkout, é necessário implementar as páginas e backend correspondentes.

## Limitações IMPORTANTES
- Este pacote reproduz a **página inicial estática**, não o backend nem o app original.
- Os links de checkout `/checkout?plano=...` e páginas internas não estão presentes no ZIP enviado. Não foram alterados, mas resultarão em 404 sem as páginas/serviços reais.
- A hidratação React e os scripts de analytics da plataforma de origem foram removidos para evitar a falha conhecida. Recursos que dependam deles (inclusive interações avançadas) podem não funcionar.
- Não há evidência suficiente para afirmar que pixels, APIs, pagamentos ou fluxos de compra funcionam.
- Não foi executado teste em navegador real ou deploy Vercel. Foi verificada apenas a integridade local de arquivos e referências estáticas.
- Verifique a veracidade de alegações comerciais, identidade da empresa, consentimentos e autorização de uso antes de publicar.
