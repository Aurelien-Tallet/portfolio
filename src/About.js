import React, { useContext } from 'react';
import './Style/About.css';
import { LangContext } from './LangContext';



const About = () => {
    const lang = useContext(LangContext)
    
    return (
        <div className="about">
            <section style={{width:"20vw",height:"20vh",border:"1px solid black"}}>{ lang ? 'ABOUT' : 'À propos'}</section>
        </div>
        
    )
}
export default About