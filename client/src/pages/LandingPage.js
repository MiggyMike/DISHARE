import React from 'react'
import Nav from '../components/Nav'

export default ({ children }) => {
  return (
<div className="">
        <Nav />
        {children}
    </div>
  )
}
