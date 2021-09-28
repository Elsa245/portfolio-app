import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdMail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

function Nav() {
  
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(()=>{
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="navbar navbar-style">
      <div className="container">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item has-text-dark main-buttons text">Elsa Guibert</Link>
          <div className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}>
            <span className="has-text-dark" aria-hidden="true"></span>
            <span className="has-text-dark" aria-hidden="true"></span>
            <span className="has-text-dark" aria-hidden="true"></span>
          </div>
        </div>
        <div className={` navbar-style navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end ">
            <div className="navbar-item ">
              <a href="#skills" className="link-nav mr-3 text">about</a>
              <a href="#projects" className="link-nav mr-3 text">projects</a>
              {/* <a href="#contacts" className="link-nav mr-3 text">experience</a>
              <a href="#contacts" className="link-nav mr-3 text">education</a> */}
              <a href="#contacts" className="link-nav mr-5 text">contacts</a>
              {/* <Link to='/experience' className="link-nav mr-3 text"> Experience</Link> */}
              {/* <Link to='/education' className="link-nav text">Education</Link> */}
              <a href="mailto: elsa.guibert@yahoo.fr" className="link-nav ml-6 mr-3 text"><MdMail /></a>
              <a target="_blank" href="https://www.linkedin.com/in/elsa-guibert/" className="link-nav mr-3 text"><FaLinkedin /></a>
              <a target="_blank" href="https://github.com/Elsa245" className="link-nav mr-3 text"><FaGithubSquare /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav 