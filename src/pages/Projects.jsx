import underConstructionImage from '/images/going-under.gif'

function Projects() {
  return (
     <div id="projects-page-container" className="page-container">
       
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10rem', flexDirection: 'column'}}>
            <img src={underConstructionImage} style={{width: '20rem'}}></img>
            <h2>Page under construction</h2>
        </div>
      </div>
  )
}

export default Projects;