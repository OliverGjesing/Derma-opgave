import React from 'react'
import "./Adtralza.css"
import Data from "../../Data.json"
import peopleimg from "./img/banner-image-transparent.png"

const Adtralza = () => {
    return (
        <div className="adtralza_holder">
        <div className="adtralza_box">
            {Data.adtralza.map((e) => (
                <section>
                    <img src={"./img/" + e.adtralza_img} alt="billede" className="adtralza_img"/>
                    <div></div>
                    <p>{e.text}</p>
                    <img src={peopleimg} alt="billede" className="peopleimg"/>
                </section>
            ))}
            </div>
        </div>
    )
}

export default Adtralza
