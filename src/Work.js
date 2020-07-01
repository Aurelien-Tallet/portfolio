import React, { useContext, useEffect, useState } from 'react';
import './Style/Work.css';
import { LangContext } from './LangContext';

const Home = (props) => {
    let wheelY = 0
    const [draggable, handleDrag] = useState(false)
    const translate = (e, onDrag = false, dragY) => {
        let speed = 4
        let y = 0
        const section1 = document.querySelector(`.section-2`)
        const section2 = document.querySelector(`.section-3`)
        const wheel = document.querySelector('.wheel')
        if (onDrag) {
            y = dragY
        } else {
            y = wheelY
            if (e.deltaY > 0) {
                if (wheelY != 200) {
                    wheelY += speed
                }
            } else {
                if (wheelY != 0) {
                    wheelY -= speed
                }
            }
            if (y >= 0 && y <= 200) {
                wheel.style.transform = `translateY(calc(${(y * 65) / 200}vh - 15px))`
            }
        }
        if (y <= 100 && y >= 0) {
            section1.style.transform = `translateY(${y}%)`
            // console.log('section 1',y)
        }
        if (y <= 200 && y >= 100) {
            // console.log('section 2',y)
            section2.style.transform = `translateY(${y - 100}%)`
        }

    }
    const drag = (e) => {
        e.preventDefault()

        const scrollbar = document.querySelector('.scrollbar-ctnr');
        const wheel = document.querySelector('.wheel');
        let rect = scrollbar.getBoundingClientRect();
        let y = e.clientY - rect.top;
        let rectWheel = wheel.getBoundingClientRect();
        let _Y = rectWheel.top - rect.top + 15
        y = (y * 200) / rect.height;
        _Y = (_Y * 200) / rect.height
        if (draggable) {

            if (y >= 0 && y <= 200) {
                wheel.style.transform = `translateY(calc(${(y * 65) / 200}vh - 15px))`
                translate(e, true,Math.round(_Y) )
                console.log(_Y)
            }
        }
    }

    const lang = useContext(LangContext)
    return (
        <div className="container" onMouseMove={drag} onMouseUp={() => handleDrag(false)} onWheel={translate}>
            <div onMouseMove={drag} onMouseDown={() => handleDrag(true)} className='scrollbar-ctnr'>
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
export default Home
