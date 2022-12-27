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
        }} src='https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        heading='Abbey' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-orange)',
            height: '16%',
            width: '6%',
            top: '84%',
            left: '80%',
        }} src='https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        heading='ye sab' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-pink)',
            height: '24%',
            width: '12%',
            top: '54%',
            left: '76%',
        }} src='https://images.unsplash.com/photo-1670844686624-91d05f20f245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        heading='to sahi' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-purple)',
            height: '24%',
            width: '12%',
            top: '24%',
            left: '45%',
        }} src='https://images.unsplash.com/photo-1671293877875-01ec7b83c2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        heading='hai par' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-violet)',
            height: '20%',
            width: '14%',
            top: '54%',
            left: '30%',
        }} src='https://images.unsplash.com/photo-1669545220173-849c2e2d7056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        heading='iska koi' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-blue)',
            height: '20%',
            width: '14%',
            top: '84%',
            left: '25%',
        }} src='https://images.unsplash.com/photo-1671299741209-04e760c463a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        heading='fayda' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-skyblue)',
            height: '30%',
            width: '16%',
            top: '54%',
            left: '50%',
        }} src='https://images.unsplash.com/photo-1664907933800-4a949153ce69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
        heading='bhi hai' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '14%',
            width: '6%',
            top: '94%',
            left: '55%',
        }} src='https://images.unsplash.com/photo-1671981151707-7aa791793275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
        heading='ya bas' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-green)',
            height: '20%',
            width: '14%',
            top: '34%',
            left: '95%',
        }} src='https://images.unsplash.com/photo-1671379827170-aaf624d3ead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
        heading='dabbey hi' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '20%',
            width: '14%',
            top: '24%',
            left: '70%',
        }} src='https://images.unsplash.com/photo-1669723009423-6c1b3d11dd92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        heading='hilane' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-green)',
            height: '14%',
            width: '14%',
            top: '64%',
            left: '92%',
        }} src='https://images.unsplash.com/photo-1669612321204-9408aabf8b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        heading='hai...' ></Card>
        <Card style={{
            backgroundColor: 'var(--var-not-darkgreen)',
            height: '20%',
            width: '14%',
            top: '89%',
            left: '95%',
        }} src='https://images.unsplash.com/photo-1671282102737-b1fe779a6a05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        heading='umar bhar' ></Card>
    </div>
}


export default Home;