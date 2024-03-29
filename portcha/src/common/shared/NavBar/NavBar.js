import React from 'react';
import MenuButton from '../../../features/Menu/MenuButton';
import './NavBar.css';

class NavBar extends React.Component {

    handleMenuTrigger(args) {
        this.props.toggleMenu(args);
    }

    render() {
        return <nav>
            <MenuButton menuToggle={this.handleMenuTrigger.bind(this)}></MenuButton>
        </nav>
    }
}

export default NavBar;