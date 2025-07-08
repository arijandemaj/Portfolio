import { useEffect, useRef, useState } from 'react'
import TypeWriter from '../components/TypeWriter';
import selfieImage from '/images/about-me-picture.png'

const GenerateRange = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function About() {

  const [rowNumbers, setRowNumbers] = useState([])
  // Line 
  const aboutMeContainerRef = useRef(null)
  const aboutMeLineRef = useRef(null)

  // RowNumbers
  const mainContainerRef = useRef(null)
  const actualRowNumbersRef = useRef(null)
  const singleRowNumberRef = useRef(null);

  useEffect(() => {
    
    // Line
    const aboutMeContainerHeight = aboutMeContainerRef.current.offsetHeight
    aboutMeLineRef.current.style.height = aboutMeContainerHeight + "px"

    // RowNumbers
    const mainContainerRefHeight = mainContainerRef.current.offsetHeight
    const actualRowNumberHeight = actualRowNumbersRef.current.offsetHeight
    const singleRowNumberHeight = singleRowNumberRef.current.offsetHeight   

    const heightToBeFilled = mainContainerRefHeight - actualRowNumberHeight
    const numbersToGenerate = Math.round(heightToBeFilled / singleRowNumberHeight)

    const rowNumerValue = parseInt(singleRowNumberRef.current.innerText) + 1
    setRowNumbers(GenerateRange(rowNumerValue, numbersToGenerate + rowNumerValue))

  }, [])

  return (
    <div className="container-flex">
      <div id="about-me-main-container" ref={mainContainerRef}>
        <div id="about-me-row-numbers" ref={actualRowNumbersRef}>
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
        <div>
          <h1 className="about-me-title">About me</h1>
          <div className="coding-editor-lines">
            <div className="horizontal-line" ref={aboutMeLineRef} style={{height: '26.5rem', marginTop: '0.5rem'}}></div>
            <div className="about-me-container" ref={aboutMeContainerRef}>
              <div className="about-me-info">
                <p>
                  Hello again, I’m Arijan — a Software Developer based in Prishtina with a Bachelor’s degree in Computer Science. 
                  I’m passionate about solving problems, keeping systems robust, and making users lives easier. 
                  I care about writing code that’s clear, maintainable, and doesn’t come back to haunt me six months later. 😂 
                </p>
                <h2 className="my-skills-title">My Skills</h2>

                <p className="skill-group">Programming Languages</p>
                <p className="skills-container">
                  C# 
                  <span className="skills-seperation-bar">|</span> 
                  SQL 
                  <span className="skills-seperation-bar">|</span>
                  JavaScript 
                  <span className="skills-seperation-bar">|</span> 
                  Python
                </p>
                <p className="skill-group">Markup & Data Formats</p>
                <p className="skills-container">
                  HTML 
                  <span className="skills-seperation-bar">|</span> 
                  CSS 
                  <span className="skills-seperation-bar">|</span>
                  JSON
                  <span className="skills-seperation-bar">|</span> 
                  XML
                </p>
                <p className="skill-group">Frameworks & Libraries</p>
                <p className="skills-container without-bars-mobile">
                  .NET Core 
                  <span className="skills-seperation-bar">|</span> 
                  .NET Framework 
                  <span className="skills-seperation-bar">|</span>
                  ASP.NET MVC 
                  <span className="skills-seperation-bar">|</span> 
                  ASP.NET Web API
                  <br></br>
                  Entity Framework Core
                  <span className="skills-seperation-bar">|</span>
                  React.js
                  <span className="skills-seperation-bar">|</span>
                  JQuery
                </p>
                <p className="skill-group">Databases & Deployment</p>
                <p className="skills-container">
                  Microsoft SQL Server
                  <span className="skills-seperation-bar">|</span>
                  IIS
                </p>  
              </div>
              <div className="about-me-image">
                <img src={selfieImage} alt="about-me-picture"/>
                <div id="qoute-container">
                  <p className="favorite-qoute-title">Favorite Quote:</p>
                  <TypeWriter 
                      text="Talk is cheap. Show me the code. - Linus Torvalds"
                      writingSpeed={150}
                      deletingSpeed={100}
                      haltSpeed={2000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;