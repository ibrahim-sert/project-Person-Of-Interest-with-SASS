import React from 'react';
import ProjectCards from '../../components/ProjectCards';
import { imageData } from "../../helper/imageData";
import "./Projects.scss";


const Projects = () => {
    console.log(imageData);
  return (
    <>
    
      <div className="project-bgImg-container">
        
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
       
    
          <div className="projects">
            <div className='projects__items'>

            
            {imageData.map((item, i) => (
              <ProjectCards item={item} key={i} />
            ))}
            </div>
          </div>
        </div>
   
    </>
  );
}

export default Projects