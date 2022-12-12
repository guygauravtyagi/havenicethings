import './Carousel.css'

function Carousel(props) {
    return <div className='carousel-container'>
        <img className='image' src={require('../../images/image-1.jpg')}></img>
        <img className='image' src={require('../../images/image-2.jpg')}></img>
        <img className='image' src={require('../../images/image-3.jpg')}></img>
        <img className='image' src={require('../../images/image-4.jpg')}></img>
        <img className='image' src={require('../../images/image-5.jpg')}></img>
        <img className='image' src={require('../../images/image-6.jpg')}></img>
        <img className='image' src={require('../../images/image-7.jpg')}></img>
        <img className='image' src={require('../../images/image-8.jpg')}></img>
        <img className='image' src={require('../../images/image-9.jpg')}></img>
    </div>
}

export default Carousel;