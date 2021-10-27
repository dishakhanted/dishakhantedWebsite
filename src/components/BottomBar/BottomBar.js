//External Libraries
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

//Internal Libraries
import InstaImg from '../../assets/insta_btn.svg';
import './BottomBar.css';

class BottomBar extends Component {
    render() {
        let bottomBarStyle = {};
        if (this.props.location.pathname==="/") {
            bottomBarStyle['backgroundColor'] = "#F7F7F7";
        }

        return <div className='BottomBar' style={bottomBarStyle}>
            <h3 className='BottomBartext'>DishaKhanted</h3>
            <img src={InstaImg} alt="Instagram" className='BottomBarimg' onClick={() => window.open('https://www.instagram.com/dishakhanted/?hl=en')}/>
            <h3 className='BottomBartext'>Copyright {new Date().getFullYear()}</h3>
        </div>;
    }
}

export default withRouter(BottomBar);