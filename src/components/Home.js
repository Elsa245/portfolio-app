import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import portraitPicture from '../images/portrait2.jpg'

function Home() {
  return (
    <>
      <section className="section">
        <div className="title">
          <img className="portrait-picture" src={portraitPicture} alt="portrait picture" />
        </div>
        <div className="title">
          <h1>Elsa Guibert <small>(She/Her)</small></h1>
          <h2>Junior Web Developer</h2>
        </div>
        <div className="about">
          <p>I’m a creative problem-solver with a constant drive to learn and apply my skills to interesting challenges. I started my journey into coding through self-taught HTML and CSS on open-source websites. I discovered my passion for programming and the challenges it brings. My interest therefore grew into a professional ambition and I fast-tracked my learning at General Assembly with an Immersive Software Engineering course where I deepened my knowledge of front-end and back-end software development. With a strong enthusiasm to continue exploring the world of software engineering I am looking for a challenging new role as a software developer to apply my technical and management skills.</p>
        </div>
      </section>
      <div className="background-img"></div>
      <Skills />
      <div className="background-img"></div>
      <Projects />
      <div className="background-img"></div>
      {/* <Experience />
      <div className="background-img"></div>
      <Education />
      <div className="background-img"></div> */}
      <Contacts />
      {/* <div className="background-img"></div> */}
    </>
  )
}
export default Home

// const Title = styled.h1`
//   justify-content: center;
//   align-items: center;
// `