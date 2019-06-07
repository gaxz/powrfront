import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Container buttons
 */
export class ControlElement extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            isHidden: true,
            onHold: false, 
        }
    }    

    toggleElements = () => {
        setTimeout(() => {
            if(!this.state.onHold) {
                this.setState({ isHidden: !this.state.isHidden });    
            }
         }, 20);
    }

    toggleHoldElements = () => {
        this.setState({ onHold: !this.state.onHold });
    }

    render() {
        return (
        <div className='elements' onMouseEnter={this.toggleElements} onMouseLeave={this.toggleElements}>
                { 
                    !this.state.isHidden && 
                    <div className='elements-inner' onMouseEnter={this.toggleHoldElements} onMouseLeave={this.toggleHoldElements}>
                        <button onClick={this.props.addContainer}>Container</button>
                        <button onClick={this.props.addBox}>Box</button>
                    </div> 
                }
                <button variant="primary">Add</button>
        </div>);
    }
}