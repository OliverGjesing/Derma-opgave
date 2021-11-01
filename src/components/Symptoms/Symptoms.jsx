import React from 'react'
import "./Symptoms.css"
import Data from "../../Data.json"

const Symptoms = () => {
    return (
        <div className="symptoms_holder">
            {Data.symptoms.map((e) => (
                <section className="symptoms_box">
                    <div>
                    <h2 className="big_text">{e.heading}</h2>
                    <p>{e.text1}</p>
                    <p>{e.text2}</p>
                    <p className="point">{e.point1}</p>
                    <p className="point">{e.point2}</p>
                    <p className="point">{e.point3}</p>
                    <button className="symptoms_button" type="button">Watch the video</button>
                    </div>
                    
                    <img className="symptoms_img" src={"./img/" + e.symptoms_picture} alt="billede"/>
                    
                </section>
            ))}
        </div>
    )
}

export default Symptoms
