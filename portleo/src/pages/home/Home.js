import React from 'react';

import './Home.css'
import Card from '../../shared/cards/Card';

function Home(props) {

    React.useEffect(() => {
        document.body.onmousemove = function (ev) {
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
    }, []);

    return <div id='home-space' className='home-container'>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '20%',
            width: '14%',
            top: '24%',
            left: '22%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-orange)',
            height: '16%',
            width: '6%',
            top: '84%',
            left: '80%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-pink)',
            height: '24%',
            width: '12%',
            top: '54%',
            left: '76%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-purple)',
            height: '24%',
            width: '12%',
            top: '24%',
            left: '45%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-violet)',
            height: '20%',
            width: '14%',
            top: '54%',
            left: '30%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-blue)',
            height: '20%',
            width: '14%',
            top: '84%',
            left: '25%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-skyblue)',
            height: '30%',
            width: '16%',
            top: '54%',
            left: '50%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '14%',
            width: '6%',
            top: '94%',
            left: '55%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-green)',
            height: '20%',
            width: '14%',
            top: '34%',
            left: '95%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '20%',
            width: '14%',
            top: '24%',
            left: '70%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-green)',
            height: '14%',
            width: '14%',
            top: '64%',
            left: '92%',
        }} ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '20%',
            width: '14%',
            top: '89%',
            left: '95%',
        }} ></Card>
    </div>
}


export default Home;