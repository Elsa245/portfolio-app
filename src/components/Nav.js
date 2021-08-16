import { Link } from 'react-router-dom'

function Nav() {

  // const history = useHistory()


  return (
    <div className="navbar">
      <Link to = '/'>
        Elsa Guibert
      </Link>
      <Link to = '/education'>
        education
      </Link>
      <Link to = '/experiences'>
        experiences
      </Link>
      <ul>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        {/* <li><a href="#experiences">experiences</a></li>
        <li><a href="#education">education</a></li> */}
        <li><a href="#contacts">contacts</a></li>
      </ul>
    </div>
  )
}
export default Nav 