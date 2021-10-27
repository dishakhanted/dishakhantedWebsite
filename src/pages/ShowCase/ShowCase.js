
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './ShowCase.css';
import Gallery from '../../components/FlexBoxGallery/Gallery';
import Controller from '../../components/Controller/Controller';

// Configuration Images
import config from '../../Config';

let cssClassName = 'ShowCase';

let images = {...config};

class ShowCase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currGroup: 1
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    loadGroup = group => {
        this.setState({currGroup: group});
    }

    render() {

        let Keys = images[this.props.match.params.category].keys;
        let Thumbnails = images[this.props.match.params.category].thumbnails;
        let Src = images[this.props.match.params.category].src;

        let controller = null, title = null;

        let uniqueKeys = [];
        for (let key of Keys) {
            if (!uniqueKeys.includes(key)) {
                uniqueKeys.push(key);
            }
        }

        if (uniqueKeys.length!==1) {
            controller = <Controller groups={uniqueKeys} currGroup={this.state.currGroup} loadGroup={this.loadGroup} />;
            if (this.state.currGroup < images[this.props.match.params.category].titles.length){
                title = <p className={cssClassName+'title'}>{images[this.props.match.params.category].titles[this.state.currGroup - 1]}</p>;
            }
        } 

        return <div className={cssClassName}>
            {controller}
            {title}
            <Gallery
                keys={Keys}
                thumbnails={Thumbnails} 
                src={Src}
                currGroup={this.state.currGroup}
                last={images[this.props.match.params.category].last}
                LightBox
            />
        </div>

    }

}

export default ShowCase;

