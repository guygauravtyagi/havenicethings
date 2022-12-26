import React from 'react';

import './Home.css'
import Card from '../../shared/cards/Card';

function Home(props) {

    function handleMouseMove(ev) {
        const homeScreen = document.getElementById('home-space');
        const xMov = (ev.clientX / window.innerWidth) * (homeScreen.offsetWidth - window.innerWidth) * -1,
            yMov = (ev.clientY / window.innerHeight) * (homeScreen.offsetHeight - window.innerHeight) * -1;
        homeScreen.style.transform = `translate(${xMov}px, ${yMov}px)`;
        homeScreen.animate({
            transform: `translate(${xMov}px, ${yMov}px)`
        }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
        });
    }


    return <div id='home-space' className='home-container'
        onMouseMove={(ev) => handleMouseMove(ev)} >
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '14%',
            width: '20%',
            left: '30%',
            top: '30%'
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '14%',
            width: '16%',
            left: '50%',
            top: '50%'
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '16%',
            width: '10%',
            left: '90%',
            top: '84%'
        }} ></Card>
    </div>
}


export default Home;