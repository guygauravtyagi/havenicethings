import './Card.css';

function Card(props) {
    return <div className='card-container' style={props.style} >
        <img src={props.src}></img>
        <h2>{props.heading}</h2>
    </div>
}


export default Card;