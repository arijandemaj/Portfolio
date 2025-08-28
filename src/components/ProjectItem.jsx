import githubWhiteIcon from '/icons/github-white.svg'
import { useEffect, useRef, useState } from 'react'


function ProjectItem({title, subtitle, description, isProjectFinished, githubLink})
{
    return (
        <div className="project-item">
            <div className="project-item-header">
                <img src={githubWhiteIcon} style={{width: '4rem'}} />
                <h2>{title}</h2>
            </div>
            <div className="project-item-description">
                <div className="horizontal-line" style={{ marginTop: '0.5rem', marginLeft: '1rem'}}></div>
                <div className='project-item-content' >
                    <p>{subtitle}</p>
                     <div className="project-item-text">
                        <p className="project-description">{description}</p>
                        {!isProjectFinished && (
                            <p>
                                ⚠️ Project in progress - more features and documentation coming soon.
                            </p>
                        )}
                        <div>
                            <a href={githubLink} target='_blank' className="show-project-button">Show Project</a>
                        </div>
                    </div>
                 
                </div>
            </div>
            
        </div>
    );
}

export default ProjectItem;
