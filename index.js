const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/' , {waitUntil: 'networkidle2' })
  await page.waitForSelector('#ulDezenas')
  
  const tmp  = await page.evaluate(() => {
    const megaNumerosHtml = '#ulDezenas li'
    const megaNumeros  = document.querySelectorAll(megaNumerosHtml)
    return Array.from(megaNumeros).map((numero) => {return numero.innerHTML})
  })

  console.log(tmp)

  await browser.close()
})()