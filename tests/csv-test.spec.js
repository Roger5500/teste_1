const { test } = require('@playwright/test');
const fs = require('fs');
const csv = require('csv-parser');

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const arquivoResultado = `resultados/resultado_${timestamp}.txt`;

function lerCSV() {
  return new Promise((resolve) => {
    const resultados = [];

    fs.createReadStream('data/valores.csv')
      .pipe(csv())
      .on('data', (data) => resultados.push(data))
      .on('end', () => resolve(resultados));
  });
}

test.describe('Testes com CSV', () => {

  let dados;

  test.beforeAll(async () => {
    dados = await lerCSV();
  });

  test('Executar testes do CSV', async ({ page }) => {

    for (const linha of dados) {

      await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice');

      await page.fill('input[name="dataInicial"]', linha.dataInicial);
      await page.fill('input[name="dataFinal"]', linha.dataFinal);
      await page.fill('input[name="valorCorrecao"]', linha.valor);

      await page.click('text=Corrigir valor');

      const resultado = await page.locator('body').innerText();

      fs.appendFileSync(
        arquivoResultado,
        `CSV -> ${linha.dataInicial} ate ${linha.dataFinal} valor ${linha.valor}\n${resultado}\n------------------------\n`
      );

    }

  });

});