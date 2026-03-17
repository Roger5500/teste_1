# Projeto de Testes Automatizados - Calculadora do Cidadão

Este projeto apresenta um conjunto de testes automatizados para a aplicação Calculadora do Cidadão do Banco Central.

Ferramentas utilizadas:

Playwright  
Lighthouse

## Estrutura do projeto

tests/  
scripts de testes automatizados

data/  
massa de dados em CSV

performance/  
scripts de teste de performance

Artefatos/  
documentação do projeto

## Artefatos

CENARIOS.md – mapeamento de cenários de teste  
PERFORMANCE.md – resultados de teste de performance  
PRODUTO.md – diagnóstico e melhorias do produto  
EXECUCAO.md – instruções de execução  
RETROSPECTIVA.md – análise retrospectiva do projeto

## Executar testes

Instalar dependências:

npm install

Executar testes:

npx playwright test

Executar teste de performance:

node performance/lighthouse-test.js