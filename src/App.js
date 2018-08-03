import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Popup from './components/Popup';
import Portfolio from './components/Portfolio';
import posts from './data/posts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts,
      infoData: '',
      isHidden: true
    };
  }

  displayData = (data) => {
    this.setState({
      infoData: data,
      isHidden: false
    });
  }

  closeInfo = () => {
    this.setState({
      isHidden: true
    });
  }

  render() {

    return (
      <div>
        <div>
          <Header />
          <div id='home'>
            <img className='fadeIn2' src="/images/coding.jpg" alt="" />
            <p className='home-alert fadeIn3'>Some pixels<br /> <span>of</span> me</p>
          </div >
          <Portfolio
            data={this.state.posts}
            displayData={this.displayData.bind(this)}
          />
        </div>
        <div id="showInfo">
          {!this.state.isHidden && <Popup
            data={this.state.infoData}
            closeInfo={this.closeInfo.bind(this)}
          />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
