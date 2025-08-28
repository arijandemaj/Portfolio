import { useEffect, useRef, useState } from 'react'
import ProjectItem from '../components/ProjectItem';
import { GenerateRange } from '../utilities/GenerateNumbers';

function Projects() {

  const [rowNumbers, setRowNumbers] = useState([])

  // Line 
  const projectsContainerRef = useRef(null)
  const projectsLineRef = useRef(null)

  // RowNumbers
  const mainContainerRef = useRef(null)
  const actualRowNumbersRef = useRef(null)
  const singleRowNumberRef = useRef(null);

  useEffect(() => {
    
    // Line
    const projectsContainerHeight = projectsContainerRef.current.offsetHeight
    projectsLineRef.current.style.height = projectsContainerHeight + "px"

    // RowNumbers
    const mainContainerRefHeight = mainContainerRef.current.offsetHeight
    const actualRowNumberHeight = actualRowNumbersRef.current.offsetHeight
    const singleRowNumberHeight = singleRowNumberRef.current.offsetHeight   

    const heightToBeFilled = mainContainerRefHeight - actualRowNumberHeight
    const numbersToGenerate = Math.round(heightToBeFilled / singleRowNumberHeight)

    const rowNumerValue = parseInt(singleRowNumberRef.current.innerText) + 1
    setRowNumbers(GenerateRange(rowNumerValue, numbersToGenerate + rowNumerValue))

  }, [])

  const projectList = [
    {
      title: "VaultQ - CLI Tool",
      subtitle: "Aug 11, 2025 - Present",
      description: "VaultQ is a cross-platform command-line tool for securely storing passwords, API keys, and other sensitive information. Built in C# with .NET, VaultQ will use AES-256 encryption to protect your data and allow multiple vaults per user.",
      isProjectFinished: false,
      githubLink: "https://github.com/arijandemaj/VaultQ"
    }
  ];

  return (
    <div id="projects-container-flex">
      <div id="projects-main-container" ref={mainContainerRef}>
         <div ref={actualRowNumbersRef}>
            <p className="row-number" style={{paddingTop: '1rem', paddingBottom: '0.3rem'}}>1</p>
            <p className="row-number" style={{paddingBottom: '0.6rem'}}>2</p>
            <p className="row-number" style={{paddingBottom: '0.9rem'}}>3</p>
            <p className="row-number" style={{paddingBottom: '0.9rem'}}>4</p>
            <p className="row-number" style={{paddingBottom: '0.6rem'}}>5</p>
            <p className="row-number" style={{paddingBottom: '0.3rem'}}>6</p>
            <p className="row-number" ref={singleRowNumberRef}>7</p>
            {
              rowNumbers.map((current) => {
                return <p className="row-number" key={current}>{current}</p>
              })
            }
        </div>
      </div>
      <div>
        <h1 id="projects-title">Projects</h1>
        <div className="coding-editor-lines">
          <div className="horizontal-line" ref={projectsLineRef} style={{height: '26.5rem', marginTop: '0.5rem'}}></div>
          <div id="projects-container" ref={projectsContainerRef}>
            <div id="projects-list">
              {projectList.map((project, index) => (
                <ProjectItem key={index} {...project} />
              ))}
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;