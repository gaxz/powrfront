import React from 'react';

/**
 * Magical box of neverending fun
 */
export class Box extends React.Component {
    
    constructor(props) {
        super(props);

        if(this.props.color) {
            this.state = { color: this.props.color};
        } else {
            this.state = { color: '#ffff00' }
        }
    }

    updateColor = () => {
        this.setState({ color: this.generateRandomColor() })
    }

    generateRandomColor = () => {
        return '#' + Math.random().toString(16).substr(2,6);
    }

    render() {
        return (
            <div className="box" onClick={this.updateColor} style={{background: this.state.color}}></div>
        )
    }
}