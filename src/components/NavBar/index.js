import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import './index.css'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/MenuSharp'

import Logo from '../Logo'

function NavBar() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <Container component="nav" className="x4 pt-2">
        <RouterLink to="/" className="Layout-brand x4">
          <Logo size={52} />
          <Typography
            component="h1"
            variant="h4"
            className="ml-2"
          >
            Vidiff
          </Typography>
        </RouterLink>
        <div className="NavBar-menu-desktop flex-grow x6">
          <Link
            component={RouterLink}
            to="/pricing"
            className="NavBar-link mr-5"
          >
            Pricing
          </Link>
          <Link
            href="https://github.com/vidiff/vidiff-documentation-and-issues#vidiff"
            target="_blank"
            className="NavBar-link mr-5"
          >
            Documentation
          </Link>
          <Link href="https://app.vidiff.com/signin" className="NavBar-link mr-5">
            Sign in
          </Link>
          <Button
            component="a"
            href="https://app.vidiff.com/signup"
            variant="outlined"
            color="primary"
          >
            Sign up
          </Button>
        </div>
        <div className="NavBar-menu-mobile flex-grow x6 pr-2">
          <IconButton size="small" onClick={() => setIsOpened(!isOpened)}>
            <MenuIcon />
          </IconButton>
        </div>
      </Container>
      {isOpened && (
        <List>
          <ListItem
            component={RouterLink}
            to="/pricing"
            className="NavBar-link"
          >
            Pricing
          </ListItem>
          <ListItem
            component="a"
            href="https://github.com/vidiff/vidiff-documentation-and-issues#vidiff"
            target="_blank"
            className="NavBar-link"
          >
            Documentation
          </ListItem>
          <ListItem
            component="a"
            href="https://app.vidiff.com/signin"
            className="NavBar-link"
          >
            Sign in
          </ListItem>
          <ListItem
            component="a"
            href="https://app.vidiff.com/signup"
            className="NavBar-link"
          >
            Sign up
          </ListItem>
        </List>
      )}
    </>
  )
}

export default NavBar
