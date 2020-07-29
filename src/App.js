import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Style/App.css';
import Home from './Home'
import Work from './Work'
import About from './About'
import Nav from './Nav'
import { LangContext } from './LangContext';

const AnimatedSwitch = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={2000}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {

  const [lang, ChangeLang] = useState(true)

  const [buttonLang, setButtonLang] = useState(true)
  return (
    <div className="App">
      <BrowserRouter className='app' >
        <LangContext.Provider value={lang}>
          <Nav>
            <button className="language-switch"
              onClick={() => { ChangeLang(!lang); setButtonLang(!buttonLang) }}
              onMouseEnter={() => setButtonLang(!lang)} onMouseLeave={() => setButtonLang(lang)}><span></span>{buttonLang ? 'EN' : 'FR'}
            </button>
          </Nav>

          <AnimatedSwitch />
        </LangContext.Provider>
      </BrowserRouter>
    </div>
  );


}

export default App;
