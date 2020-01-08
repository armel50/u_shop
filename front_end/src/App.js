import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './containers/Home'
import Cart from './containers/Cart'
import ArticleContainer from './containers/ArticleContainer';
import SideBar from './components/sideBar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Router>
          <SideBar />
          <Route exact path='/' render={() => <Home />}/>

          <div className='ui container'>

            <Route path='/articles' render={renderProps => <ArticleContainer {...renderProps} />}/>
            <Route path='/carts/1' render={renderProps => <Cart {...renderProps}/>}/>

          </div>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
