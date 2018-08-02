import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import PortfolioTest from './components/portfolio-test';
import Footer from './components/footer';
import InfoFrame from './components/InfoFrame';
import DataList from './components/DataList';
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
          <DataList
            data={this.state.posts}
            displayData={this.displayData.bind(this)}
          />
          <PortfolioTest />
        </div>
        <div id="showInfo">
          {!this.state.isHidden && <InfoFrame
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



// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <div id='home'>
//           <img className='fadeIn2' src="/images/coding.jpg" alt="" />
//           <p className='home-alert fadeIn3'>Some pixels<br /> <span>of</span> me</p>
//         </div >
//         <PortfolioTest />
//         <Footer />
//       </div>

//     );
//   }
// }

// export default App;
