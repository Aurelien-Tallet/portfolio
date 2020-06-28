import React, { useContext, useEffect } from 'react';
import './Style/Work.css';
import { LangContext } from './LangContext';

const Home = (props) => {

    let y = 0
    const translate = (e) =>{
    e.preventDefault()
    console.log(e.deltaY)
    document.querySelector('.section-1').style.transform = `translateY(${y}%)`
    y += 1 * e.deltaY
    // console.log(y)
    
}

    const lang = useContext(LangContext)
    return (
        <div className="container" onWheel={translate}>
            <div className="Work section-1" >
                <p style={{ margin: 0, left: '50%', top: '50%' }}>{lang ? "Hello" : "salut"}</p>
                <button onClick={(e) => document.querySelector('.section-2').scrollIntoView({ behavior: 'smooth' })}>Scroll</button>
            </div>

            <div className="Work section-2">
                <p style={{ margin: 0, left: '50%', top: '50%' }}>{lang ? "Hello" : "salut"} </p>
            </div>
            <div className="Work section-3">
                <p style={{ margin: 0, left: '50%', top: '50%' }}>{lang ? "Hello" : "salut"}</p>
            </div>
        </div>
    )
}
export default Home
