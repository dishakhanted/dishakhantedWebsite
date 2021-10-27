
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './Messages.css';
import firebase from '../../firebase';

let cssClassName = 'Messages';

// This is messages section
class Messages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        firebase.database().ref().child('messages').on('child_added', snapshot => {
            let messages = [...this.state.messages, snapshot.val()];
            this.setState({messages});
        });
    }

    render() {

        let messages = [];
        for (let message of this.state.messages) {
            messages.push(<div key={message.email} className={cssClassName+'message'}>
                <p className={cssClassName+'name'}>{message.name}</p>
                <p className={cssClassName+'email'}>{message.email}</p>
                <p className={cssClassName+'body'}>{message.message}</p>
                <p className={cssClassName+'date'}>{message.date}</p>
            </div>)
        }

        return <div className={cssClassName}>
            {messages}
        </div>;

    }

}

export default Messages;