import React, { useContext, useEffect, useState } from 'react';
import './Style/Work.css';
import { LangContext } from './LangContext';

const Work = (props) => {

    useEffect(()=>{
        console.log('monter Work')
        return () => console.log('démonter Work')
     },[])



    const [draggable, handleDrag] = useState(false)
    let speed = 4
    const translate = (e, onDrag = false, dragY) => {
        const scrollbar = document.querySelector('.scrollbar-ctnr');
        const wheel = document.querySelector('.wheel')
        const section1 = document.querySelector(`.section-2`)
        const section2 = document.querySelector(`.section-3`)
        let rect = scrollbar.getBoundingClientRect();
        let rectWheel = wheel.getBoundingClientRect();
        let y = rectWheel.top - rect.top + 15
        y = Math.round((y * 200) / rect.height)
        if (onDrag===false) {
            if (e.deltaY > 0) {
                if (y != 200) {
                    y += speed
                }
            } else {
                if (y != 0) {
                    y -= speed
                }
            }
            if (y >= 0 && y <= 200) {
                wheel.style.transform = `translateY(calc(${(y * 65) / 200}vh - 15px))`
            }
        }
        if (y >= 0 && y <= 100) {
            section1.style.transform = `translateY(${y}%)`
            section2.style.transform = `translateY(${-100}%)`

        }
        if (y >= 100 && y <= 200) {
            section1.style.transform = `translateY(${100}%)`
            section2.style.transform = `translateY(${y - 100}%)`
        }

    }
    const drag = (e) => {
        e.preventDefault()

        const scrollbar = document.querySelector('.scrollbar-ctnr');
        const wheel = document.querySelector('.wheel');
        let rect = scrollbar.getBoundingClientRect();
        let rectWheel = wheel.getBoundingClientRect();
        let y = e.clientY - rect.top;
        let _Y = rectWheel.top - rect.top + 15
        y = (y * 200) / rect.height;
        _Y = Math.round((_Y * 200) / rect.height)
        if (draggable) {
            if (y < 0) y = 0
            if (y > 200) y = 200
            if (y >= 0 && y <= 200) {
                wheel.style.transform = `translateY(calc(${(y * 65) / 200}vh - 15px))`
                if(_Y%4===0) translate(e, true, _Y)
            }
        }
    }
    const releaseDrag = () =>{
        const scrollbar = document.querySelector('.scrollbar-ctnr');
        const wheel = document.querySelector('.wheel');
        let rect = scrollbar.getBoundingClientRect();
        let rectWheel = wheel.getBoundingClientRect();
        let y = rectWheel.top - rect.top + 15
        y = Math.ceil(Math.round((y * 200) / rect.height)/speed) * speed
        wheel.style.transform = `translateY(calc(${(y * 65) / 200}vh - 15px))`
        handleDrag(false)
    }

    const lang = useContext(LangContext)
    return (
        <div className="container" onMouseMove={drag} 
        onMouseUp={releaseDrag} onWheel={translate}>
            <div onMouseDown={() => handleDrag(true)} className='scrollbar-ctnr'>
                <div className='scrollbar'></div>
                <div className='wheel'></div>
            </div>

            <div className="Work section-1">
                <p style={{ margin: 0, left: '50%', top: '50%' }}>{lang ? "Section 1" : "Section 1"}</p>
            </div>
            <div className="Work section-2" >
                <p style={{ margin: 0, left: '50%', top: '50%' }}>{lang ? "Section 2" : "Section 2"}</p>
            </div>

            <div className="Work section-3">
                <p style={{ margin: 0, left: '50%', top: '50%' }}>{lang ? "Section 3" : "Section 3"} </p>
            </div>
        </div>
    )
}
export default Work

