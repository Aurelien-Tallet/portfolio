import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './Style/App.css';
import Home from './Home'
import Work from './Work'
import About from './About'
import Nav from './Nav'
import { LangContext } from './LangContext';



function App() {
  
  const [lang, ChangeLang] = useState(true)

  const [buttonLang, setButtonLang] = useState(true)
  return (

    <BrowserRouter >
      <LangContext.Provider value={lang}>
        <Nav>
         <button className="language-switch" onClick={() => {ChangeLang(!lang); setButtonLang(!buttonLang)}} onMouseEnter={()=> setButtonLang(!lang)} onMouseLeave={()=> setButtonLang(lang)}><span></span>{buttonLang ? 'EN' : 'FR'}</button>
        </Nav>

        <Switch >

          <Route path='/' component={Home}   exact />
          <Route path='/work' component={Work}   exact />
          <Route path='/about' component={About}  exact />
          <Route path='/' component={() => <div style={{ color: "black", }}>Page Not Found</div>} />
        </Switch>
      </LangContext.Provider>
    </BrowserRouter>

  );


}

export default App;
