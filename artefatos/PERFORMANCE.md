# Teste de Performance

A análise de desempenho da aplicação foi realizada utilizando a ferramenta Lighthouse.

Ferramenta utilizada:
Lighthouse

O Lighthouse foi executado por meio de script Node.js para avaliar métricas de performance da página da Calculadora do Cidadão.

## Resultados

Foram realizadas execuções que retornaram as seguintes pontuações de performance:

Execução 1:
Performance Score: 48

Execução 2:
Performance Score: 81

## Interpretação

Score abaixo de 50 indica performance considerada baixa.

Score acima de 80 indica uma performance aceitável.

A variação pode ocorrer devido a fatores como:

- latência da rede
- carga do servidor
- execução em ambiente local

## Possíveis otimizações

Durante a auditoria foram identificados possíveis pontos de melhoria:

- redução de CSS não utilizado
- otimização de carregamento de recursos
- melhoria no tempo de resposta inicial do servidor