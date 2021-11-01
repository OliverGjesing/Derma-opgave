import React from 'react'
import Data from "../../Data.json"
import "./Circles.css"

const Circles = () => {
    return (
        <div className="circles_holder">
            <div className="circles_box_holder">
            {Data.circles.map((e) => (
                <section className="circles_box">
                    <img src={"./img/" + e.pic} alt="billede" className="adtralza_img"/>
                    <div>
                    <h2>{e.heading}</h2>
                    <p>{e.text}</p>
                    <a className="circles_link" href="http://localhost:3000/">{e.link}</a>
                    </div>
                   
                </section>
            ))}
            </div>
        </div>
    )
}

export default Circles
