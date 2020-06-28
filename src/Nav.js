import React, { useContext, useState, useEffect } from 'react';
import './Style/Nav.css';
import { NavLink } from 'react-router-dom';
import { LangContext } from './LangContext';



const Nav = (props) => {


    const lang = useContext(LangContext)
    const [isNotHome, setIsNotHome] = useState(false)

    const checkPath = () => {

        let pathname = window.location.pathname
        if (pathname === '/') {
            setIsNotHome(false)
        } else setIsNotHome(true)
    }
    useEffect(() => {
        checkPath()
    }, [])




    return (
        <header className="NavCtnr">

            <nav>
                { <NavLink className="nav" language={lang} to="/">{lang ? 'Home' : 'Accueil'}</NavLink>}
                <NavLink className="nav " language={lang} activeClassName="current" to="/work">{lang ? 'Work' : 'Réalisations'}</NavLink>
                <NavLink className="nav"language={lang} activeClassName="current" to="/about">{lang ? 'About' : 'À propos'}</NavLink>
            </nav>

            {props.children}
        </header>


    )
}
export default Nav