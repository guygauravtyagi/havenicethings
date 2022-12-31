import './Contact.css';
import Button from '../../shared/Button/Button';
import TextInput from '../../shared/TextInput/TextInput';

function Contact(params) {
    return(
        <div className='contact-container'>
            <TextInput></TextInput>
            <div>
            <Button name='Okay'></Button>
            <Button name='Email'></Button>
            </div>
        </div>
    );
}

export default Contact;