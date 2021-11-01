import React from 'react'
import Data from "../../Data.json"
import "./Tools.css"

const Tools = () => {
    return (
        <div className="tools_holder">
        <h2 className="tools_heading">Clinical tools - at a glance</h2>
        <div className="tools_box_holder">
            {Data.tools.map((e) => (
                <section className="tool_box">
                    <img src={"./img/" + e.picture} alt="billede" className=""/>
                    <div>
                    <h2 className="big_text">{e.heading}</h2>
                    <p>{e.text}</p>
                    <a href="http://localhost:3000/">{e.link}</a>
                    </div>
                </section>
            ))}
            </div>
        </div>
    )
}

export default Tools
