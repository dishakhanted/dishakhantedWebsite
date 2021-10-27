
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './Contact.css';
import '../../global.css';
import Form from '../../components/Form/Form';

let cssClassName = 'Contact';

class Contact extends Component {

    render() {
        return <div className={cssClassName}>
            <Form />
        </div>;
    }

}

export default Contact;