import React from 'react'
import style from "./About.module.css"

function About() {
return (
    
<div className={style.container}>
    <h1>About Me</h1>
    <p className={style.paragraph1}> <span className={style.span1}></span>Here’s a slightly more personalized About Me based on what you shared:<br /></p>
    <p className={style.paragraph2}> I am a second-year software development student with a strong interest in web development. <br />I have experience
        working with JavaScript and React, and I enjoy building practical projects that help me improve my skills.<br /> I am
        motivated to learn new technologies, solve real-world problems, and continuously grow as a developer.</p>
       
</div>
)
}

export default About
