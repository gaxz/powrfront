import React from 'react';
import {Container} from './Container';
import { StateHandler } from './StateHandler';
import { StateBuilder } from './StateBuilder';

/**
 * Transfers the application state between components
 */
export class BaseContainer extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = props.condition;
    }

    updateFromInputState = (inputState) => {
        this.setState(JSON.parse(inputState));
    }

    render() {
        return (
        <div>
            <div className="base">
                <Container condition={this.state} />
            </div>
            <div className="state-handler">
            <StateBuilder updateFromInputState={this.updateFromInputState} />
            <StateHandler />
            </div>
        </div>
        );
    }
}
