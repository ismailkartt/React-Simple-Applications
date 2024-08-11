import React from 'react'
import data from "../../assets/data/students.json"

const SelectedCourses = () => {

    // Select'in icine kurslari tekrarsiz sekilde ekliyelim

  return (
    <div>
        <select>
            {
                data.reduce((values,student)=>{
                    if(!values.includes(student.kurs)){
                        values.push(student.kurs);
                    }
                    return values;
                },[]).map((item,index)=>
                   <option key={index}>{item}</option> 
                )
            }
            
        </select>
    </div>
  )
}

export default SelectedCourses