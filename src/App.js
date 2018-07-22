import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Portfolio from './components/portfolio';
import PortfolioTest from './components/portfolio-test';
import Footer from './components/footer';
import Popup from './components/popup';



class App extends Component {
  render() {
    return (



      <div>
        <Header />
        <div id='home'>
          <img className='fadeIn2' src="/images/coding.jpg" alt="" />
          <p className='home-alert fadeIn3'>Some pixels<br /> <span>of</span> me</p>
        </div >
        {/* <Portfolio /> */}
        <PortfolioTest />
        <Footer />
        {/* <Popup /> */}

      </div>

    );
  }
}

export default App;
