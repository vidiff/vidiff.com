import React, { Component } from 'react'

import './index.css'

class FadingCarousel extends Component {
  state = {
    i: 0,
    opacity: 0,
  }

  componentDidMount() {
    const { intervalDuration } = this.props

    this.intervalId = setInterval(() => {
      this.setState({
        opacity: 1,
      })

      this.timeoutId = setTimeout(() => {
        const { imageSources } = this.props
        const { i } = this.state

        this.setState({
          opacity: 0,
          i: i === imageSources.length - 1 ? 0 : i + 1,
        })
      }, intervalDuration / 2)
    }, intervalDuration)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
    clearInterval(this.intervalId)
  }

  render() {
    const { imageSources, imageAlts, imageTitles, ...props } = this.props
    const { i, opacity } = this.state

    const nextI = i === imageSources.length - 1 ? 0 : i + 1

    return (
      <div {...props}>
        <div className="FadingCarousel">
          <img
            key={imageSources[i]}
            src={imageSources[i]}
            alt={imageAlts[i]}
            title={imageTitles[i]}
          />
          <img
            key={imageSources[nextI]}
            src={imageSources[nextI]}
            alt={imageAlts[nextI]}
            title={imageTitles[nextI]}
            style={{ opacity }}
          />
        </div>
      </div>
    )
  }
}

FadingCarousel.defaultProps = {
  intervalDuration: 2500,
  imageSources: [],
  imageAlts: [],
  imageTitles: [],
}

export default FadingCarousel
