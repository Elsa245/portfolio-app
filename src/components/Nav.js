import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <>
      <Link to='/' >Elsa Guibert</Link>
      <Link to='/experience'> Experience</Link>
      <Link to='/education'>Education</Link>
    </>
  )
}
export default Nav 