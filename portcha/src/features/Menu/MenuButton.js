import React from 'react';
import { createRoot } from 'react-dom/client';
import './Menu.css';

class MenuButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classValue: true
        };
    }

    toggleMenu() {
        this.setState(prev => ({
            classValue: !prev.classValue
        }));
        this.props.menuToggle(this.state.classValue);
    }

    render() {
        return <div className={this.state.classValue ? 'menu-button' : 'menu-button menu-button-animate'} onClick={this.toggleMenu.bind(this)}>
            <div></div>
            <div></div>
            <div></div>
        </div>;
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<MenuButton />);

export default MenuButton;