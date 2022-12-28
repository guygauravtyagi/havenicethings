import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
    return <div className='card-container' style={props.style} >
        <Link to={props.link}>
            <img src={props.src}></img>
            <h2>{props.heading}</h2>
        </Link>
    </div>
}


export default Card;