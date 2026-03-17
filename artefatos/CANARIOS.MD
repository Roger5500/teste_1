Mapeamento de cenários de teste


Cenários positivos

Os cenários positivos verificam se o sistema funciona corretamente quando o usuário fornece dados válidos.

Cenário 1 — Cálculo de correção com dados válidos

Objetivo: validar que o sistema calcula corretamente a correção monetária.

Passos:

Acessar a página da calculadora.

Informar data inicial válida.

Informar data final válida.

Informar um valor monetário válido.

Executar o cálculo.

Resultado esperado: o sistema deve apresentar o texto “Valor corrigido” juntamente com o valor atualizado.

Cenários negativos

Os cenários negativos verificam como o sistema se comporta quando dados inválidos são fornecidos.


Cenário 2 — Data inicial inválida

Objetivo: validar se o sistema detecta datas inválidas.

Passos:

Inserir uma data inicial inexistente (ex.: 13/2020).

Informar data final válida.

Informar valor monetário.

Executar cálculo.

Resultado esperado: o sistema deve apresentar mensagem de erro informando que a data inicial é inválida.

Casos de borda (Edge Cases)

Casos de borda testam situações limite que podem causar comportamentos inesperados.


Cenário 3 — Data inicial igual à data final

Objetivo: verificar se o sistema aceita cálculos no mesmo período.

Resultado esperado: o sistema deve retornar um valor corrigido.


Cenário 4 — Valor igual a zero

Objetivo: verificar como o sistema lida com valores nulos.

Resultado esperado: o sistema deve retornar resultado igual a zero.


Cenário 5 — Valor extremamente alto

Objetivo: validar se o sistema suporta valores elevados sem falhas.

Resultado esperado: o cálculo deve ser realizado normalmente.


Cenário 6 — Campo de valor não informado

Objetivo: verificar o comportamento do sistema quando o usuário não preenche o valor.

Resultado esperado: o sistema ainda deve retornar um cálculo ou tratar o campo de forma apropriada.


Cenário 7 — Execução de testes com massa de dados externa

Objetivo: validar múltiplos cenários utilizando dados externos em formato CSV.

Resultado esperado: os testes devem ser executados para cada linha do arquivo de dados.