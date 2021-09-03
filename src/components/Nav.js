import React from 'react'
import { Link, useLocation } from 'react-router-dom'

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
          <Link to='/' className="navbar-item has-text-dark main-buttons">Elsa Guibert</Link>
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
            <div className="navbar-item">
              <Link to='/experience' className="link-nav mr-3"> Experience</Link>
              <Link to='/education' className="link-nav">Education</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav 