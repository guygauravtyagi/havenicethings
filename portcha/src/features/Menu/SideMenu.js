import React from 'react';
import './Menu.css';

class SideMenu extends React.Component {

  render() {
    return <div className={this.props.isClosed ? 'menu-window' : 'menu-window menu-window-hide'}>
        <div>
            <h2>Home</h2>
        </div>
        <div>
            <h2>About</h2>
        </div>
        <div>
            <h2>Services</h2>
        </div>
        <div>
            <h2>Works</h2>
        </div>
        <div>
            <h2>Contacts</h2>
        </div>
    </div>;
  }
}

export default SideMenu;