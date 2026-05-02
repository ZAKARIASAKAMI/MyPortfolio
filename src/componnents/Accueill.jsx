import React from 'react'
import style from './Accueill.module.css'
import image from '../assets/p1.png'

function Accueill() {
return (
<div className={style.accueill}>
    <div className={style.content}>
        <h3>Hello, I'm</h3>
        <h1>Zakaria sakami</h1>
        <h2>junior Full-Stack Developer</h2>
        <p>I am a second-year software developer focused on building modern web applications using technologies like
            JavaScript and React. I enjoy learning through hands-on projects, improving my skills, and creating
            practical solutions with a good user experience.</p>
        <button className={style.btn}>View Projects</button>
        <button2 className={style.btn2}>Contact Me</button2>
    </div>
    <div className={style.image}><img src={image} alt="" />

    </div>
</div>
)
}


export default Accueill
