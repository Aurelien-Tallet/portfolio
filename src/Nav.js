import React, { useContext, useState, useEffect } from 'react';
import './Style/Nav.css';
import { NavLink , Link} from 'react-router-dom';
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
                { <Link className="nav" language={lang}  onlyActiveOnIndex to="/">{lang ? 'Home' : 'Accueil'}</Link>}
                <Link className="nav " language={lang} activeClassName="current" onlyActiveOnIndex to="/work">{lang ? 'Work' : 'Réalisations'}</Link>
                <Link className="nav"language={lang} activeClassName="current" onlyActiveOnIndex to="/about">{lang ? 'About' : 'À propos'}</Link>
            </nav>

            {props.children}
        </header>


    )
}
export default Nav