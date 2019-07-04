import React from 'react'

import './index.css'

import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

import NavBar from '../NavBar'

function Layout({ children }) {
  return (
    <div className="Layout y8s">
      <NavBar />
      <main className="overflow-hidden flex-grow">
        {children}
      </main>
      <footer className="background-1">
        <Container className="x5 pb-4">
          <Link href="https://app.vidiff.com/terms-of-service" className="mx-4">
            Terms of service
          </Link>
          <Link href="https://app.vidiff.com/privacy-policy" className="mx-4">
            Privacy policy
          </Link>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
