import GA from '../images/ga-logo.jpg'
import TapTapSend from '../images/taptapsend-logo.jpg'
import Opale from '../images/opale-logo.jpg'
import university from '../images/university-logo.jpg'
import inmoment from '../images/inmoment-logo.jpg'

function Experience() {
  return (
    <div id="experience" className="experience section">
      <h1 className="title-projects">My experience:</h1>
      <div className="experience-content">
        <img className="logo" src={GA} alt="general assembly logo" />
        <div className="text">
          <h1>General Assembly - Software Engineering Immersive Course</h1>
          <h2>London, U.K.</h2>
          <h3>March 2021 to June 2021</h3>
          <p> I learned and applied the fundamentals of front-end and back-end web development in this immersive remote course, using Agile project delivery techniques. <br/> The course consisted of daily stand-ups, online lectures, group labs, pair-programming and homeworks, and allowed me to be part of a cohort with a strong mutual support. The course also had four major solo or group portfolio projects to solidify and implement the technical concepts we were learning.
          </p>
        </div>
      </div>

      <div className="experience-content">
        <img className="logo" src={inmoment} alt="InMoment logo" />
        <div className="text">
          <h1>InMoment - Market Researcher</h1>
          <h2>London, U.K.</h2>
          <h3>March 2020 to March 2021</h3>
          <p>
          </p>
        </div>
      </div>

      <div className="experience-content">
        <img className="logo" src={TapTapSend} alt="taptap send logo" />
        <div className="text">
          <h1>TapTap Send - Customer Service Representative</h1>
          <h2>London, U.K.</h2>
          <h3>November 2020 to January 2021</h3>
          <p>
          </p>
        </div>
      </div>

      <div className="experience-content">
        <img className="logo" src={Opale} alt="Opale logo" />
        <div className="text">
          <h1>Opale - Research Assistant</h1>
          <h2>Paris, France</h2>
          <h3>April 2020</h3>
          <p>
          </p>
        </div>
      </div>

      <div className="experience-content">
        <img className="logo" src={university} alt="Univeristy of Paris logo" />
        <div className="text">
          <h1>Culture Centre, University of Paris - Project Coordinator <br/> and Public Engagement Officer</h1>
          <h2>Paris, France</h2>
          <h3>June 2018 to October 2019</h3>
          <p>
          </p>
        </div>
      </div>

      <div className="experience-content">
        {/* <img className="logo" src={GA} alt="general assembly logo" /> */}
        <div className="text">
          <h1>Tourism Office - Project Coordinator and <br />Public Engagement Officer</h1>
          <h2>Mont-Louis, France</h2>
          <h3>May to August 2017</h3>
          <p>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Experience