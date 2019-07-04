import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import './index.css'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Comparator from '../../components/Comparator'
import FadingCarousel from '../../components/FadingCarousel'

const scenario = `
async function scenario(browser, baseUrl) {
  // Go to your environment URL
  await browser.get(baseUrl + '/signin')

  // Take your first screenshot
  await browser.takeScreenshot('Signin', 'The signin page')

  // Get DOM elements
  const emailInput = await browser.elementByCssSelector('#email')
  const passwordInput = await browser.elementByCssSelector('#password')
  const submitButton = await browser.elementByCssSelector('#submit')

  // Type data into inputs
  await emailInput.type('user@vidiff.com'.split(''))
  await passwordInput.type('password1234'.split(''))

  // Click a button
  await submitButton.click()

  // Take the second screenshot
  await browser.takeScreenshot('Home', 'The main route')

  // Test your UI functionally
  const banner = await browser.elementByCssSelector('.banner')
  const bannerText = await banner.text()

  assert(bannerText === 'Welcome!')
}
`

function Home() {
  return (
    <>
      <Container className="mt-5">
        <Typography
          component="h1"
          variant="h2"
          className="Home-call"
        >
          Visual regression testing
          <br />
          across stages
        </Typography>
        <Comparator className="Home-comparator mt-5" />
      </Container>
      <div className="background-1">
        <Container className="mt-6 py-6">
          <Typography
            component="div"
            variant="h4"
            className="x47"
          >
            <div>On more than 1800 browsers</div>
            <div className="x47 mt-4 mt-lg-0">
              <img src="/images/chrome-optimized.png" alt="chrome" title="Google Chrome" className="Home-capability ml-4 mb-4 mb-lg-0" />
              <img src="/images/firefox-optimized.png" alt="firefox" title="Mozilla Firefox" className="Home-capability ml-4 mb-4 mb-lg-0" />
              <img src="/images/safari-optimized.png" alt="safari" title="Apple Safari" className="Home-capability ml-4 mb-4 mb-lg-0" />
              <img src="/images/edge-optimized.png" alt="edge" title="Microsoft Edge" className="Home-capability ml-4 mb-4 mb-lg-0" />
              <img src="/images/ie-optimized.png" alt="internet explorer" title="Microsoft Internet Explorer" className="Home-capability ml-4 mb-4 mb-lg-0" />
            </div>
          </Typography>
        </Container>
      </div>
      <Container className="Home-container x7 py-6">
        <div className="mb-5">
          <Typography component="h2" variant="h4">
            Visually compare two stages/branches with ease
          </Typography>
          <Typography className="Home-body mt-3">
            Automatically detect visual regressions across your application UI. Know where and when a regression or a new feature appeared.
          </Typography>
          <Typography className="Home-body mt-3">
            Or just a tiny margin change you missed.
          </Typography>
        </div>
        <Paper elevation={5} className="Home-image-wrapper ml-md-5">
          <FadingCarousel
            imageSources={[
              '/images/screenshot-difference-1.png',
              '/images/screenshot-difference-2.png',
              '/images/screenshot-difference-3.png',
            ]}
            imageAlts={[
              'Difference',
              'Difference',
              'Difference',
            ]}
            imageTitles={[
              'Side by side',
              'Slider',
              'Mask',
            ]}
          />
        </Paper>
      </Container>
      <div className="background-1">
        <Container className="Home-container x7 py-6">
          <Paper elevation={5} className="Home-image-wrapper mr-md-5">
            <img
              src="/images/github-integration.png"
              alt="difference"
              className="Home-image"
            />
          </Paper>
          <div className="mt-4 mt-md-0">
            <Typography component="h2" variant="h4">
              Integrate with GitHub
            </Typography>
            <Typography className="Home-body mt-3">
              Compare the base and the head of every Pull Request you create. We'll provide status checks for your commits.
            </Typography>
          </div>
        </Container>
      </div>
      <Container className="Home-container x7 py-6">
        <div className="mb-5">
          <Typography component="h2" variant="h4">
            Test visually and functionally
          </Typography>
          <Typography className="Home-body mt-3">
            Run scenario functions against environment URLs to take screenshots and make assertions on your app's functionalities.
          </Typography>
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={docco}
          className="Home-scenario mt-0 ml-md-5"
        >
          {scenario.trim()}
        </SyntaxHighlighter>
      </Container>
      <div className="background-1">
        <Container className="y8 py-6">
          <Typography component="h2" variant="h4">
            Ready to compare?
          </Typography>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            component="a"
            href="https://app.vidiff.com/signup"
            className="mt-4"
          >
            Sign up
          </Button>
        </Container>
      </div>
    </>
  )
}

export default Home
