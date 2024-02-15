import React from 'react'
import './NavBar.css'

const NavBar = () => {

    return (
        <>

        <h1 className={`titulo`}>Peluqueria Gaby</h1>


       <ul className={`loreal`} >
        <li>
            <a className={`loreal`}>INICIO</a>
        </li>
        <li>
            <a className={`loreal`}>Loreal</a>
        </li>
        <li>
            <a className={`loreal`} >Kerastase</a>
        </li>
       </ul>

        </>

    )
}

export default NavBar;