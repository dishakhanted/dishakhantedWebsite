
// External Libraries
import React, {Component} from 'react';
import Radium from 'radium';

// Internal Libraries
import './Controller.css';

let cssClassName = 'Controller';

class Controller extends Component {

    render() {
        return <div className={cssClassName}>
            {this.props.groups.map((group,i) => {
                let selection = 'normal';

                if (this.props.currGroup===group) {
                    selection = 'selected';
                }

                return <p key={i} className={cssClassName+selection} onClick={() => this.props.loadGroup(group)}>{group}</p>
            })}
        </div>;
    }
}

export default Radium(Controller);