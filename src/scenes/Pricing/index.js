import React from 'react'

import './index.css'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

function Pricing() {
  return (
    <Container className="text-align-center my-6">
      <Typography component="h1" variant="h2">
        Vidiff is free during its beta phase
      </Typography>
    </Container>
  )
}

export default Pricing
