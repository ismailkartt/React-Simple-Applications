import React from 'react'
import students from "./students.json"

const Filtered = () => {

    // Listeye yaşı 25'den kucuk olanlarin isimlerini ekle
  

  return (
    <div>
        <ol>
            {
                students.filter(student => student.yas < 25).map((item,index)=>
                    <li key={index}>{item.isim}</li>
                )
            }
        </ol>
    </div>
    

  )
}

export default Filtered