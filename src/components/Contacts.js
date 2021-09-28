import { MdMail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

function Contacts() {
  return (
    <div id="contacts" className="section">
      <hr />
      <h3 className="contact">Contact me:</h3>
      <div className="footer-nav">
        <a href="mailto: elsa.guibert@yahoo.fr"><MdMail />  Email: elsa.guibert@yahoo.fr</a>
        <a target="_blank" href="https://www.linkedin.com/in/elsa-guibert/"><FaLinkedin />  LinkedIn</a>
        <a target="_blank" href="https://github.com/Elsa245"><FaGithubSquare />  GitHub</a>
      </div>
    </div>
  )
}
export default Contacts 