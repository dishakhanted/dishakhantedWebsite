
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './Portfolio.css';
import '../../global.css';
import Category from '../../components/Category/Category';
import Config, {texts} from '../../Config';

let reversed = [false,true,false];

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    loadCategory = (category) => {
        this.props.history.push("/portfolio/"+category);
    }

    render() {

        if (this.state.width <= 768) {
            for (let i in reversed) {
                reversed[i] = true;
            }
        } else {
            for (let i in reversed) {
                if (i%2===0){
                    reversed[i] = false;
                } else {
                    reversed[i] = true;
                }
            }
        }

        return <div style={{width: '100%'}}>
            <Category 
                title={texts.Portfolio.titles[0]}
                subtext={texts.Portfolio.descs[0]}
                button="See More"
                click={() => this.loadCategory('main')}
                image={Config.category.thumbnails[0]}
                reverse={reversed[0]}
                width={this.state.width}
            />
            <Category 
                title={texts.Portfolio.titles[1]}
                subtext={texts.Portfolio.descs[1]}
                button="See More"
                click={() => this.loadCategory('black_and_white')}
                image={Config.category.thumbnails[1]}
                reverse={reversed[1]}
                darken={true}
                width={this.state.width}                
            />
            <Category
                title={texts.Portfolio.titles[2]}
                subtext={texts.Portfolio.descs[2]}
                button="See More"
                click={() => this.loadCategory('shirtflirt')}
                reverse={reversed[2]}
                width={this.state.width}
                image={Config.category.thumbnails[2]}
            />
        </div>;
    }

}

export default Portfolio;