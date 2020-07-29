import React, { useContext, useEffect } from 'react';
import './Style/About.css';
import { LangContext } from './LangContext';



const About = () => {
    const lang = useContext(LangContext)
    useEffect(()=>{
        console.log('monter About')
        return () => console.log('démonter About')
     },[])
    return (
        <div className="about">
            <p>Développeur Front-end basé à Paris, je travaille avec : </p>
        </div>
        
    )
}
export default About