import React from "react";

function MedicalTreatment (props) {
  
  
    return(
    <div>
        <img />
        <h2>Hadi Hospital NHS !</h2>

      <ul>
        <li> Treat ID : {props.treatmentId} </li> 
        <li> Treat Course ID: {props.treatmentCourseId}</li> 
        <li> Type: {props.type} </li> 
        <li>  Category: {props.category}  </li>
        <li>  Name: {props.name} </li> 
        <li>  Start Date: {props.startDate}</li>
        </ul>
    </div>
    )
    

  }


export default MedicalTreatment;


