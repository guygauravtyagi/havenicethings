import React from 'react';
import './Home.css';

import SideMenu from '../../features/Menu/SideMenu';
import NavBar from '../../common/shared/NavBar/NavBar';
import Fading from '../../common/small-components/background-designs/fading-ground/Fading';
import HomeTop from '../../features/home-top/HomeTop';
import Carousel from '../../features/carousel/Carousel';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuClose: false
    }
  }

  decideMenu(args) {
    this.setState(prev => ({
      menuClose: args
    }));
  }

  render() {
    return <div>
      <Fading />
      <NavBar toggleMenu={this.decideMenu.bind(this)}></NavBar>
      <HomeTop></HomeTop>
      <div id='potion-two' className='page-porton-two'>
        <Carousel></Carousel>
      </div>
      <SideMenu isClosed={this.state.menuClose}></SideMenu>
    </div>;
  }
}

export default Home;