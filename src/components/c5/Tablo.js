import React from 'react'
import student from "../../assets/data/students.json"


const Tablo = () => {

    const style = {
        backgroundColor: "cyan",
        color:"red",
        fontWeight:"bold",
        textAlign:"center"  
    }


  return (
    <div>
        <table style={{width:"500px", margin:"3rem auto"}}>
            <thead style={{background:"blue",color:"crimson"}}>
                <tr>
                    <th>Isim</th>
                    <th>Yas</th>
                    <th>Kurs</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((ogrenci,index)=>
                    <tr key={index} style={index % 2 === 0 ? style : {...style, backgroundColor:"bisque"}}>    
                        <td>{ogrenci.isim}</td>
                        <td>{ogrenci.yas}</td>
                        <td>{ogrenci.kurs}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Tablo