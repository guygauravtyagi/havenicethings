import React from 'react';
import './Carousel.css'

function Carousel(props) {
    React.useEffect(() => {
        document.documentElement.style.setProperty('--carousel-mouse-x', '0');
        document.documentElement.style.setProperty('--carousel-move-percent', '0');
        window.addEventListener('mousedown', e => {
            document.documentElement.style.setProperty('--carousel-mouse-x', e.clientX);
        });
        window.addEventListener('mousemove', e => {
            if (parseFloat(Number.parseInt(getComputedStyle(document).getPropertyValue('--carousel-mouse-x').textContent))) return;
            const mouseMove = parseFloat(Number.parseInt(getComputedStyle(document).getPropertyValue('--carousel-mouse-x').textContent)) - e.clientX;
            const maxMove = window.innerWidth / 2;
            document.documentElement.style.setProperty('--carousel-move-percent', (mouseMove / maxMove) * 100);
        })
    }, []);
    return <div className='carousel-container'>
        <img className='image' alt='this is interesting' src={require('../../images/image-1.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-2.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-3.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-4.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-5.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-6.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-7.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-8.jpg')} draggable='false'></img>
        <img className='image' alt='this is interesting' src={require('../../images/image-9.jpg')} draggable='false'></img>
    </div>
}

export default Carousel;