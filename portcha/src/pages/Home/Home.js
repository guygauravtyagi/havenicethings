import React from 'react';
import './Home.css';
import SideMenu from '../../features/Menu/SideMenu';
import NavBar from '../../common/shared/NavBar/NavBar';
import Fading from '../../common/small-components/background-designs/fading-ground/Fading';

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
      <div id='potion-one' className='page-porton-one'>
        <NavBar toggleMenu={this.decideMenu.bind(this)}></NavBar>
        <div className="heading-text">
          <div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies lacinia augue, volutpat porttitor nibh tempor eu. Quisque finibus tortor eget vestibulum semper. Nulla facilisi. Sed ac magna efficitur, porttitor neque eget, accumsan lectus. Etiam in vestibulum nibh. Cras sed lacinia neque. Nam laoreet mollis nulla, id varius justo ornare sed.

              Suspendisse elit lorem, laoreet eu justo eget, pulvinar mollis turpis. Sed quam velit, ultricies nec lacus finibus, congue finibus purus. Vestibulum mollis sed sem id pharetra. Sed lobortis turpis sit amet lacinia finibus. Quisque luctus dui id mauris pulvinar, ut vulputate ante sagittis. Aenean non ex elit. Aliquam rutrum urna id ullamcorper laoreet. Morbi pretium erat vitae enim gravida porttitor.

              Duis eget leo arcu. Sed sit amet purus arcu. Etiam feugiat, libero id sagittis pretium, odio leo auctor felis, non blandit neque lacus sit amet nibh. Pellentesque vitae convallis dui. Donec in enim a ligula maximus fringilla a at quam. Praesent pharetra lectus quis mauris vulputate suscipit. Maecenas pretium, urna vitae gravida fermentum, orci massa ultrices risus, vitae egestas lacus odio nec urna. Donec ut mollis metus. Cras id tortor ut ipsum luctus pharetra. Sed elementum dolor in iaculis ultricies. Pellentesque aliquam mattis finibus. Vestibulum a scelerisque purus, vitae porta erat. Sed et faucibus enim, sed elementum velit.
            </h1>
          </div>
        </div>
      </div>
      <div id='potion-two' className='page-porton-two'>
        <h1>Kabadi</h1>
        <a href='#potion-one'>go up</a>
      </div>
      <SideMenu isClosed={this.state.menuClose}></SideMenu>
    </div>;
  }
}

export default Home;