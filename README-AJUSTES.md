# Ajustes desta versão
- Cartões Bronze/Prata/Ouro permanecem visualmente originais.
- Seleção de 1, 2, 3 caixas em janela ao clicar no botão de compra.
- Vídeo e carrossel mantidos do código anterior.
- Removido script de quantidade que injetava elementos nos cartões e referência a script inexistente.
- Valores calculados sem descontos adicionais não confirmados.
- IMPORTANTE: o destino `/checkout` não está implementado no pacote; o checkout precisa ser integrado e validar `quantidade` no servidor.
- Não foi possível comparar visualmente o seletor com o site de referência em navegador real; a janela implementada é uma aproximação funcional, não uma cópia comprovadamente idêntica.
