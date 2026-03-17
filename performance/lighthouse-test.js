const lighthouse = require('lighthouse').default;
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

(async () => {

  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

  const options = {
    logLevel: 'info',
    output: ['json', 'html'],
    port: chrome.port
  };

  const url = 'https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice';

  const runnerResult = await lighthouse(url, options);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  const resultFolder = path.join(__dirname, 'result');

  if (!fs.existsSync(resultFolder)) {
    fs.mkdirSync(resultFolder);
  }

  const jsonFile = path.join(resultFolder, `performance_${timestamp}.json`);
  const htmlFile = path.join(resultFolder, `performance_${timestamp}.html`);

  fs.writeFileSync(jsonFile, runnerResult.report[0]);
  fs.writeFileSync(htmlFile, runnerResult.report[1]);

  const score = runnerResult.lhr.categories.performance.score * 100;

  console.log('\n RESULTADO DO TESTE DE PERFORMANCE');
  console.log('-----------------------------------');
  console.log(`URL testada: ${url}`);
  console.log(`Performance Score: ${score}`);
  console.log(`Relatório JSON: ${jsonFile}`);
  console.log(`Relatório HTML: ${htmlFile}`);
  console.log('-----------------------------------\n');

  setTimeout(async () => {
    await chrome.kill();
  }, 2000);

})();