import React from 'react';
import './Carousel.css'

function Carousel(props) {
    React.useEffect(() => {
        let precent = 0;
        let prevPercent = 0;
        const carouselElement = document.getElementById('carousel-id');

        document.documentElement.style.setProperty('--carousel-mouse-x', '0');
        document.documentElement.style.setProperty('--carousel-move-percent', '0%');
        document.documentElement.style.setProperty('--image-move-percent', '100%');

        window.addEventListener('mouseup', e => {
            document.documentElement.style.setProperty('--carousel-mouse-x', '0');
            prevPercent = precent;
        });

        window.addEventListener('mousedown', e => {
            e.preventDefault();
            document.documentElement.style.setProperty('--carousel-mouse-x', e.clientX);
        });

        window.addEventListener('mousemove', e => {
            if (document.documentElement.style.getPropertyValue('--carousel-mouse-x') === '0') return;
            const mouseMove = parseFloat(document.documentElement.style.getPropertyValue('--carousel-mouse-x')) - e.clientX;
            const maxMove = window.innerWidth / 2;
            precent = ((mouseMove / maxMove) * -100) + prevPercent;
            if (precent > 0) precent = 0;
            else if (precent < -100) precent = -100;
            document.documentElement.style.setProperty('--carousel-move-percent', precent + '%');
            carouselElement.animate({
                transform: `translate(${precent}%, 50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of carouselElement.getElementsByClassName("image")) {
                image.animate({
                    objectPosition: `${100 + precent}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        })
    }, []);

    return <div id='carousel-id' className='carousel-container'>
        <img className='image' alt='this is interesting' src={require('../../images/image-10.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-1.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-2.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-3.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-4.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-5.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-6.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-7.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-8.jpg')} draggable={false}></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-9.jpg')} draggable={false}></img>
    </div>
}

export default Carousel;