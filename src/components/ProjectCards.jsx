import React from 'react'


const ProjectCards = ({item}) => {
    const {image}=item
    console.log(item);
  return (

      <div className="projects__item">
        <img src={image} alt="" />
   
    </div>
  ); 
    }

export default ProjectCards