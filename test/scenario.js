async function scenario(browser, url) {
  await browser.get(url)
  await browser.takeScreenshot('Home')
  await browser.get(`${url}/pricing`)
  await browser.takeScreenshot('Pricing')
}

module.exports = scenario
