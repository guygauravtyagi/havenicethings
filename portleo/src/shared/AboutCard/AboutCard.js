import './AboutCard.css';

export default function AboutCard(props) {
    return (
        <div style={{
            backgroundImage: `linear-gradient(135deg, #00000080, #000000), url(${props.src})`
        }} className='about-card-holder'>
            <img src={props.src} alt={props.alt} />
            <div>
                <h2>
                    {props.name}
                    <span>({props.pronouns})</span>
                </h2>
                <div>
                    <label>{props.designation}</label>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}