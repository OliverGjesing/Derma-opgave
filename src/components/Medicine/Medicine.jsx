import React from 'react'
import "./Medicine.css"
import Data from "../../Data.json"


const Medicine = () => {
    return (
        <div className="medicine_holder">
        <div className="medicine_box">
        {Data.medicine.map((e) => (
                <section>
                    <img src={"./img/" + e.medicine_img} alt="billede" className="medicine_img"/>
                    <div>
                    <p className="big_text">{e.big_text}</p>
                    <p>{e.text}</p>
                    </div>
                </section>
            ))}
        
        </div>
            
        </div>
    )
}

export default Medicine
