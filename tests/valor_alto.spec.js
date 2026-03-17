const { test, expect } = require('@playwright/test');

test('Calcular com valor alto', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice');

  await page.fill('input[name="dataInicial"]', '01/2010');
  await page.fill('input[name="dataFinal"]', '01/2020');
  await page.fill('input[name="valorCorrecao"]', '1000000');

  await page.click('text=Corrigir valor');

  await expect(page.locator('body')).toContainText('Valor corrigido');

});