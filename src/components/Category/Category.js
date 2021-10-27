
//External Libraries
import React from 'react';

//Internal Libraries
import '../../global.css';
import './Category.css';
import lightGrid from '../../assets/lightgrey_grid.svg';
import darkGrid from '../../assets/darkgrey_grid.svg';

//Custom Imports
const strtojsx = require('react-string-replace');

let cssClassName = 'Category';

const Category = (props) => {

    let desc,bgcolor = '#F7F7F7';
    let srcUrl = lightGrid;
    let layout = [];

    if (props.darken===true) {
        bgcolor = '#f0f0f0';
        srcUrl = darkGrid;
    }
    if ('subtext' in props && props.subtext!=='') {
        desc = strtojsx(props.subtext, '\n', (e, i) => <br key={i}/>);
    }

    let content = <div className={cssClassName+'content'} key={0}>
        <div className={cssClassName+'container'}>
            <h2 className={cssClassName+'title'}>{props.title}</h2>
            <p className={cssClassName+'subtext'}>{desc}</p>
            <button className='button' onClick={props.click}>{props.button}</button>
        </div>
    </div>;

    let icon = <div className={cssClassName+'icon'} key={1}>
        <img 
            src={srcUrl}
            alt="Unavailable"
            style={{backgroundImage: 
                `url(${props.image})`,
                backgroundSize: '300px 400px'
            }} 
            className={cssClassName + 'img'}
            width="300" 
            height="400"
        />
    </div>;

    if (props.reverse) {
        layout.push(icon);
        layout.push(content);
    } else {
        layout.push(content);
        layout.push(icon);
    }

    return <div style={{backgroundColor: bgcolor}} className={cssClassName}>
    <div>
        {layout}
    </div></div>;
}

export default Category;

