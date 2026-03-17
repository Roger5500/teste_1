const { test, expect } = require('@playwright/test');

test('Erro ao usar data inválida', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice');

  await page.fill('input[name="dataInicial"]', '13/2020');
  await page.fill('input[name="dataFinal"]', '01/2021');
  await page.fill('input[name="valorCorrecao"]', '100');

  await page.click('text=Corrigir valor');

  await expect(page.locator('body')).toContainText('Data inicial é uma data inválida');
});