import imgTrippy from '../images/trippy.jpg'
import artmatch from '../images/artmatch.jpg'
import invaders from '../images/invaders.jpg'



function Projects() {
  return (
    <div id="projects" className="section">
      <h3 className="title-projects">Main Projects:</h3>

      <section className="project">
        <h3>Zenith</h3>
        <div className="project-devicons">
          <div className="project-devicon">
            <i className="devicon-python-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-django-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-postgresql-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-react-original"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-html5-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-css3-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-sass-original"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-nodejs-plain"></i>
          </div>
        </div>
        <p>A wellness-focused app built in Python, Django, PostgreSQL for the back-end to create a RESTful API and React styled components to develop the front-end. Using the idea of an Agile workflow, the user, once authenticated, can set a new sprint period and access a personal dashboard with sprint goals and habits, weekly intentions and daily trackers that automatically reset after their end date. I particularly focused on conceiving the ERD diagram and writing the relationships between our back-end models while producing the Sprint Goal, Daily Mood and Energy-Level models and their front-end pages using React Context. I also implemented a slider and a calendar library, as well as an external weather API (Open Weather Map).</p>
        {/* <div className="project-picture">
          <a target="_blank" href=""><img src={zenith} className="project-img"/></a>
        </div> */}
      </section>

      <section className="project">
        <a target="_blank" href="https://trippy-project.netlify.app/"><h3>Trippy</h3>
        </a>
        <div className="project-devicons">
        <div className="project-devicon">
            <i className="devicon-express-original"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-mongodb-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-react-original"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-html5-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-css3-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-sass-original"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-bulma-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-nodejs-plain"></i>
          </div>
        </div>
        <div className="project-picture">
          <a target="_blank" href="https://trippy-project.netlify.app/"><img src={imgTrippy} className="project-img"></img></a>
        </div>
        <p>A London based travel application consuming a tailored API of alternative places in the city using MongoDB and Express, on top of two external APIs (Mapbox and Postcodes.io) to display these visually on a map. In this project, I especially took ownership for the back-end of the Place and Review models as well as the routing for our API requests. For the front-end using React, I produced the Home page with a search functionality and a filtered API request to display only the highest rated places. I also wrote the Reviews component and I implemented the complete styling of the app with Sass and the Bulma framework to create a simple but responsive and intuitive user experience.</p>
        
      </section>

      <section className="project">
        <a target="_blank" href="https://art-match.netlify.app/"><h3>ArtMatch</h3></a>
        <div className="project-devicons">
          <div className="project-devicon">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-react-original"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-html5-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-css3-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-bulma-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-nodejs-plain"></i>
          </div>
        </div>
        <div className="project-picture">
          <a target="_blank" href="https://art-match.netlify.app/"><img src={artmatch} className="project-img"/></a>
        </div>
        <p>In this hackathon type challenge, as a pair, we built a front-end web application with React, Sass and the Bulma framework using an external API (Artsy) to create a Tinder-inspired site which matches users with modern artists. We implemented a token refresh system to allow for uninterrupted API calls and filtered our requests with specific search queries. The user had the option to "swipe" left or right in response to a randomly called artist. A like would show the user a new page with a full description of the artist, or a dislike would store that artist to a rejected array and make a new random call from the artists still available.</p>
      </section>

      <section className="project">
        <a target="_blank" href="https://elsa245.github.io/project-1/"><h3>Space Invaders</h3></a>
        <div className="project-devicons">
          <div className="project-devicon">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-html5-plain"></i>
          </div>
          <div className="project-devicon">
            <i className="devicon-css3-plain"></i>
          </div>
        </div>
        <div className="project-picture">
          <a target="_blank" href="https://elsa245.github.io/project-1/"><img src={invaders} className="project-img"/></a>
        </div>
        <p>For this first project I used HTML, CSS and vanilla JavaScript to build a grid-based game. I decided to create a take on one of my favourite arcade games, Space Invaders, and challenge myself to write the movement logic with collision detection, using loops and array methods. I also implemented a leader board using local storage to create a more realistic game experience.</p>
      </section>

    </div>
  )
}
export default Projects