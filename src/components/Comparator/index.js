import React, { Component, useState, useEffect } from 'react'

import './index.css'

import useTheme from '@material-ui/styles/useTheme'
import Typography from '@material-ui/core/Typography'

const slides = [
  {
    baseline: '/images/compare-dashboard-1.png',
    comparison: '/images/compare-dashboard-2.png',
    difference: '/images/compare-dashboard-3.png',
    status: 'accepted',
    scenario: 'App tour',
    domain: 'app',
  },
  {
    baseline: '/images/compare-blog-1.png',
    comparison: '/images/compare-blog-2.png',
    difference: '/images/compare-blog-3.png',
    status: 'rejected',
    scenario: 'Blog tour',
    domain: 'blog',
  },
]

const startDelay = 200
const animationComparisonDelay = 1800
const animationDifferenceDuration = 500
const animationDifferenceDelay = 200
const animationDifferenceTimeout = startDelay + animationComparisonDelay + animationDifferenceDuration + animationDifferenceDelay
const animationStandByDuration = 3500

const ref = React.createRef()

class Comparator extends Component {

  state = {
    i: 0,
    height: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { i } = this.state

      let ii = i + 1

      if (ii >= slides.length) ii = 0

      this.setState({ i: ii })
    }, animationDifferenceTimeout + animationStandByDuration)

    setTimeout(() => this.setState({ height: ref.current.clientHeight }), 50)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { i, height } = this.state
    const slide = slides[i]

    return (
      <div
        {...this.props}
        ref={ref}
        style={{ minHeight: height }}
      >
        <Slide key={i} slide={slide} />
      </div>
    )
  }
}

function Slide({ slide }) {
  const { baseline, comparison, difference, status, scenario, domain } = slide

  const theme = useTheme()
  const [animateSlide, setAnimateSlide] = useState(false)
  const [animateStageOpacity, setAnimateStageOpacity] = useState(false)
  const [animateImage, setAnimateImage] = useState(false)
  const [animateDifference, setAnimateDifference] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimateSlide(true), startDelay)
    setTimeout(() => setAnimateStageOpacity(true), startDelay + animationComparisonDelay + 250)
    setTimeout(() => setAnimateImage(true), startDelay + animationComparisonDelay)
    setTimeout(() => setAnimateDifference(true), animationDifferenceTimeout)
    setTimeout(() => setAnimateSlide(false), animationDifferenceTimeout + animationStandByDuration - startDelay)
  })

  return (
    <div
      className="Slide"
      style={{
        top: animateSlide ? 0 : -10,
        opacity: animateSlide ? 1 : 0,
      }}
    >
      <div className="Slide x5b" style={{ opacity: animateStageOpacity ? 0 : 1 }}>
        <div className="Slide-image mono">
          Production - master
        </div>
        <div className="Slide-image mono">
          Staging - dev
        </div>
      </div>
      <div className="Slide x5b mt-1">
        <img
          className="Slide-image"
          alt="baseline"
          src={baseline}
        />
        <img
          className="Slide-image Slide-image-comparison"
          alt="comparison"
          src={comparison}
          style={{
            right: animateImage ? '52.5%' : 0,
            opacity: animateImage ? 0.5 : 1,
          }}
        />
        {difference && (
          <img
            className="Slide-image Slide-image-difference"
            alt="difference"
            src={difference}
            style={{
              opacity: animateDifference ? 1 : 0,
            }}
          />
        )}
        <div
          className="Slide-info"
          style={{
            opacity: animateDifference ? 1 : 0,
          }}
        >
          <Typography className="mono">
            Scenario: {scenario}
          </Typography>
          <br />
          <Typography className="mono">
            Baseline:&nbsp;&nbsp; master https://{domain}.example.com
          </Typography>
          <Typography className="mono">
            Comparison: dev&nbsp;&nbsp;&nbsp; https://staging.{domain}.example.com
          </Typography>
          <br />
          <Typography className="mono">
            Difference status:&nbsp;
            <span style={{ color: status === 'accepted' ? theme.palette.green[500] : status === 'rejected' ? theme.palette.red[500] : 'normal' }}>
              {status}
            </span>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Comparator
