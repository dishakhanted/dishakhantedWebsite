
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import '../../global.css';
import './Home.css';
import HomeBg from '../../assets/Fashion-and-Model-Photography-in-Bangalore.png';
import Section from '../../components/Section/Section';
import config, {texts} from '../../Config';

let cssClassName = 'Home';

class Home extends Component {

    pushPage = url => {
        this.props.history.push(url);
    }

    render() {

        return <div className={cssClassName}>
            <img src={HomeBg} alt="Fashion Photography" className={cssClassName + 'img'}/>
            <Section 
                title={texts.Home.titles[0]}
                subtext={texts.Home.descs}
                button="Read More"
                click={() => this.pushPage('/about')}
            />
            <Section
                title={texts.Home.titles[1]}
                images={config.shirtflirtdemo}
                darken={true}
                button="See More"
                click={() => this.pushPage('/portfolio/shirtflirt')}
            />
            <Section
                title={texts.Home.titles[2]}
                images={config.portfoliodemo}
                button="See More"
                click={() => this.pushPage('/portfolio/main')}
            />
            <Section
                title={texts.Home.titles[3]}
                images={config.portraits}
                darken={true}
                button="See More"
                click={() => this.pushPage('/portfolio/black_and_white')}
            />
        </div>;

    }

}

export default Home;