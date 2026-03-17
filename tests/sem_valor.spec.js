const { test, expect } = require('@playwright/test');

test('Calcular sem informar valor', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice');

  await page.fill('input[name="dataInicial"]', '01/2021');
  await page.fill('input[name="dataFinal"]', '12/2021');

  await page.click('text=Corrigir valor');

  await expect(page.locator('body')).toContainText('Valor corrigido');

});