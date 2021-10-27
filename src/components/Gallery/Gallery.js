
// External Libraries
import React, {Component} from 'react';
import windowSize from 'react-window-size';

// Internal Libraries
import './Gallery.css';
import firebase from '../../firebase';

let cssClassName = "Gallery";

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isImageOpen: false,
            isBackdropOpen: false,
            mainSrc: ''
        };
    }

    openLightBox = (index) => {
        if (this.props.LightBox===true){
            this.setState({isBackdropOpen: true});
            firebase.storage().ref(this.props.src[index]).getDownloadURL()
            .then(url => this.setState({mainSrc: url, isImageOpen: true}))
            .catch(err => console.log(err));
        }
    }

    closeLightBox = () => {
        this.setState({isImageOpen: false, isBackdropOpen: false});
    }

    render() {

        let layout = [];

        let check = 3;
        let mw = "33.33%";

        /* if (this.props.windowWidth<=768 || this.props.fromSection) {
            check = 3;
            mw = "33.33%";
        } */

        let j = 0;

        for (let i=0;i<check;i++) {
            layout.push([]);
        }

        for (let i in this.props.thumbnails) {
            let Style = {};

            if (this.props.Style!=null) {
                Style = {...this.props.Style};
            }

            if (j===check) {
                j = 0;
            }

            if (this.props.LightBox===true) {
                Style['cursor'] = 'pointer';
            }

            if ('currGroup' in this.props) {
                if (this.props.keys[i]===this.props.currGroup){
                    layout[j++].push(<img 
                        src={this.props.thumbnails[i]} 
                        alt={this.props.currGroup + i} 
                        key={i} 
                        alt={"Model" + this.props.currGroup + " Photo " + i} 
                        border="0"
                        onClick={() => this.openLightBox(i)}
                        style={Style}
                    />);
                }
            } else {
                layout[j++].push(<img 
                    src={this.props.thumbnails[i]} 
                    alt={"Model" + this.props.currGroup + " Photo " + i} 
                    key={i} 
                    className={cssClassName+'pic'} 
                    border="0"
                    onClick={() => this.openLightBox(i)}
                    style={Style}
                />);
            }
        }

        j--;

        if (this.props.last!=null) {
            let last = this.props.last;
            let lastItems = [];
            if ('currGroup' in this.props) {
                if (this.props.currGroup < this.props.last.length){
                    last = this.props.last[this.props.currGroup-1];
                } else {
                    last = [];
                }
            }
            for (let i=0;i<(last.length>3 ? 3 : last.length);i++){
                if (j===-1){
                    j = 2;
                }
                let layoutLastIndex = layout[j].length - 1;
                lastItems.push(layout[j][layoutLastIndex]);
                layout[j].pop();
                j--;
            }
            lastItems = lastItems.reverse();
            for (let i in last){
                let val = parseInt(last[i], 10) - 1;
                layout[val].push(lastItems[i]);
                lastItems.splice(0,1);
            }
        }

        let gallery = [];

        for (let i in layout) {
            gallery.push(<div key={i} style={{maxWidth: mw}} className={cssClassName+'column'}>
                {layout[i]}
            </div>);
        }

        let lightbox = 'block';
        let closebtn = 'block';
        let loader = 'inline-block';
        let backdrop = 'block';

        if (this.state.isImageOpen===false) {
            lightbox = 'none';
        }

        if (this.state.isBackdropOpen===false) {
            loader = 'none';
            backdrop = 'none';
            closebtn = 'none';
        }

        return <div className={cssClassName}>
            <img src={this.state.mainSrc} alt="Unavailable" className={cssClassName + 'img'} style={{display: lightbox}}/>
            <div className="lds-hourglass" style={{display: loader}}/>
            <button className={cssClassName+'closebtn'} style={{display: closebtn}} onClick={this.closeLightBox}>x</button>
            <div className={cssClassName + 'backdrop'} style={{display: backdrop}}/>
            {gallery}
        </div>;

    }
}

export default windowSize(Gallery);
