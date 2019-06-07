import React from 'react';
import {Box} from './Box';
import {ControlElement} from './ControlElement';

/**
 * Generates child container and box 
 */
export class Container extends React.Component {
    
    constructor(props) {
        super(props);

        if(props.condition) {
            this.state = props.condition;
        } else {
            this.state = { items: [] };
        }
    }

    componentWillReceiveProps(props) {
        this.setState(props.condition);
    }

    /**
     * Generate items from StateBuilder's json string
     */
    processItems() {
        if(this.state.items) {
            var components = this.state.items.map((data, index) => this.createObjectByType(data, index));
        }

        return components;
    }

    createObjectByType(data, index) {
        if(data.type === 'container') {
            return this.createContainer(data, index);
        }
        if(data.type === 'box') {
            return this.createBox(data, index);
        }
    }

    /**
     * Generate child objects
     */
    createContainer = (data, index) => {
        return <Container condition={data} key={index} />
    }

    createBox = (data, index) => {
        return <Box color={data.color} key={index} />
    }

    /**
     * Update state for re-render
     */
    addContainer = () => {
        this.setState({
            items: [...this.state.items, {type: 'container', items: []}]
        });
    }

    addBox = () => {
        this.setState({
            items: [...this.state.items, {type: 'box', color: ""}]
        });
    }

    render() {
        return (
            <div className="container">
                {this.processItems()}
                <ControlElement addContainer={this.addContainer} addBox={this.addBox} />
            </div>
        );
    }
}