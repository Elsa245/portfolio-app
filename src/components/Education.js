import university from '../images/university-logo.jpg'
// import northumbria from '../images/northumbria-logo.jpg'


function Education() {
  return (
    <div id="education" className="experience section">
      <hr />
      <h1 className="title-projects">My education:</h1>
      <div className="experience-content">
        <img className="logo" src={university} alt="Univeristy of Paris logo" />
        <div className="text">
          <h1>MA, History: Cultural Heritage, Cities, Architecture</h1>
          <h2>University of Paris - Paris, France</h2>
          <h3>September 2016 to October 2019</h3>
          <p>Thesis: Can we consider street art as cultural heritage? <br />History of street art in Paris, 13th arrondissement</p>
        </div>
      </div>

      <div className="experience-content">
        <img className="logo" src={university} alt="Univeristy of Paris logo" />
        {/* <img className="logo" src={northumbria} alt="Northumbria University logo" /> */}
        <div className="text">
          <h1>BA, History</h1>
          <h2>University of Paris - Paris, France</h2>
          <h3>September 2013 to June 2016</h3>
          <p>Erasmus exchange programme at Northumbria University, Newcastle-upon-Tyne, U.K. - 2015-2016</p>
        </div>
      </div>

    </div>
    
  )
}
export default Education