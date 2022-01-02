import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import SignInPage from './pages/signin/sign-in-and-sign-up.component';
import GamePage from './pages/game/game-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
