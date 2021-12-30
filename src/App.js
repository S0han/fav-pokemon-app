import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import SignInPage from './pages/signin/sign-in-and-sign-up.component';
import GamePage from './pages/game/game-page.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = null;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
