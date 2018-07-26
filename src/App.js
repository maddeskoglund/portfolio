import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import PortfolioTest from './components/portfolio-test';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id='home'>
          <img className='fadeIn2' src="/images/coding.jpg" alt="" />
          <p className='home-alert fadeIn3'>Some pixels<br /> <span>of</span> me</p>
        </div >
        <PortfolioTest />
        <Footer />
      </div>

    );
  }
}

export default App;
