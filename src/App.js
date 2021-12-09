import React from "react";
import "./style.css";
import MedicalTreament from "./MedicalTreatment";


export default function App() {
  return (
    <div>
       <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/NHS_England_logo.svg"/>
      <MedicalTreament
      treatmentId="101"
      treatmentCourseId="102"
      type="cardiology"
      catgegory="high"
      name="Hadi"
      startDate="01/03/2021"
      
      
      />
    </div>
  );
}

