import './Card.css';

function Card(props) {
    return <div className='card-container' style={props.style} >
        <img src='https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'></img>
    </div>
}


export default Card;