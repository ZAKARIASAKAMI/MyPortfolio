import React from 'react'
import style from './Header.module.css'

function Header() {
return (
<div className={style.header}>
    <div><p className={style.logo}>ZS<span>.</span></p> </div>
    <div className={style.nav}>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Experience</a>
        <button>Contact Me</button>
    </div>
</div>

)
}

export default Header
