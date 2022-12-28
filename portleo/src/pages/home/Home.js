import React from 'react';

import './Home.css'
import Card from '../../shared/cards/Card';

function Home(props) {

    const dots = [];
    let mouse = {
        x: 0,
        y: 0
    };

    React.useEffect(() => {
        document.body.onmousemove = function (ev) {
            const homeScreen = document.getElementById('home-space');
            if (!homeScreen) return;
            mouse.x = (ev.clientX / window.innerWidth) * (homeScreen.offsetWidth);
            mouse.y = (ev.clientY / window.innerHeight) * (homeScreen.offsetHeight);
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
            for (var i = 0; i < 12; i++) {
                var d = new Dot(document.getElementById('home-space'));
                dots.push(d);
            }
    }, []);

    function animate() {
        draw(mouse);
        requestAnimationFrame(animate);
    }
    animate();

    var Dot = function (ele) {
        this.x = 0;
        this.y = 0;
        this.node = (function () {
            var n = document.createElement("div");
            n.className = "trail";
            ele.appendChild(n);
            return n;
        }());
    };
    Dot.prototype.draw = function () {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };
    function draw(mouse) {
        var x = mouse.x,
            y = mouse.y;
        dots.forEach(function (dot, index, dots) {
            var nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * .5;
            y += (nextDot.y - dot.y) * .5;
        });
    }

    return (
        <div id='home-space' className='home-container'>
            <Card style={{
                backgroundColor: 'var(--var-not-darkgreen)',
                color: 'var(--var-not-darkgreen)',
                height: '20%',
                width: '14%',
                top: '8%',
                left: '6%',
            }} src='https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                heading='About Us' link='/about' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-orange)',
                color: 'var(--var-not-orange)',
                height: '16%',
                width: '6%',
                top: '68%',
                left: '64%',
            }} src='https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                heading='Stuff'></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-pink)',
                color: 'var(--var-not-pink)',
                height: '24%',
                width: '12%',
                top: '38%',
                left: '60%',
            }} src='https://images.unsplash.com/photo-1670844686624-91d05f20f245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                heading='Nice' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-purple)',
                color: 'var(--var-not-purple)',
                height: '24%',
                width: '12%',
                top: '8%',
                left: '29%',
            }} src='https://images.unsplash.com/photo-1671293877875-01ec7b83c2fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                heading='Contact Us' link='/contact' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-violet)',
                color: 'var(--var-not-violet)',
                height: '20%',
                width: '14%',
                top: '38%',
                left: '14%',
            }} src='https://images.unsplash.com/photo-1669545220173-849c2e2d7056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                heading='We' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-blue)',
                color: 'var(--var-not-blue)',
                height: '20%',
                width: '14%',
                top: '68%',
                left: '9%',
            }} src='https://images.unsplash.com/photo-1671299741209-04e760c463a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                heading='fayda' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-skyblue)',
                color: 'var(--var-not-skyblue)',
                height: '30%',
                width: '16%',
                top: '38%',
                left: '34%',
            }} src='https://images.unsplash.com/photo-1664907933800-4a949153ce69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                heading='Build' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-darkgreen)',
                color: 'var(--var-not-darkgreen)',
                height: '14%',
                width: '6%',
                top: '78%',
                left: '39%',
            }} src='https://images.unsplash.com/photo-1671981151707-7aa791793275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
                heading='ya bas' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-green)',
                color: 'var(--var-not-darkgreen)',
                height: '20%',
                width: '14%',
                top: '18%',
                left: '79%',
            }} src='https://images.unsplash.com/photo-1671379827170-aaf624d3ead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
                heading='dabbey hi' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-darkgreen)',
                color: 'var(--var-not-darkgreen)',
                height: '20%',
                width: '14%',
                top: '8%',
                left: '54%',
            }} src='https://images.unsplash.com/photo-1669723009423-6c1b3d11dd92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                heading='Blogs' link='/blogs' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-green)',
                color: 'var(--var-not-green)',
                height: '14%',
                width: '14%',
                top: '48%',
                left: '76%',
            }} src='https://images.unsplash.com/photo-1669612321204-9408aabf8b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                heading='Things' ></Card>
            <Card style={{
                backgroundColor: 'var(--var-not-darkgreen)',
                color: 'var(--var-not-darkgreen)',
                height: '20%',
                width: '14%',
                top: '73%',
                left: '79%',
            }} src='https://images.unsplash.com/photo-1671282102737-b1fe779a6a05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                heading='umar bhar' ></Card>
        </div>)
}


export default Home;