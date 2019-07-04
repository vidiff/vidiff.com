import React from 'react'

function Logo({ size = 32 }) {
  return (
    <img
      src="/images/logo-400px.png"
      className="no-select"
      style={{ width: size }}
      alt="logo"
    />
  )
}

export default Logo
