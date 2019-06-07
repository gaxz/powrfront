import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Handles user input and passes it to BaseContainer 
 */
export class StateBuilder extends React.Component {

    constructor(props) {
        super(props);

        this.state = { input: '' }
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    passStateToParent = () => {
        this.props.updateFromInputState(this.state.input);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInput} />
                <Button onClick={this.passStateToParent}>Build</Button>
            </div>
        );
    }
}

StateBuilder.propTypes = {
    input: PropTypes.string
}