import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * Collects application state by parsing nodelist
 */
export class StateHandler extends React.Component {

    componentDidMount() {
        this.parseContainer();
    }

    /**
     * Parse base container's child nodes
     */
    parseContainer = () => {
        var base = document.querySelector('.base');
        var stateObject = [];

        this.elementFilter(base.childNodes, stateObject);
        
        this.setState(...stateObject);
    }

    /**
     * Recursively get data from nodelist and store it in stateObject by reference 
     */
    elementFilter = (elem, stateObject) => {
        elem.forEach((element, index) => {                           
            if(element.className === 'box') {
                stateObject[index] = {'type': 'box', 'color': element.style.background};
            }

            if(element.className === 'container') {
                stateObject[index] = {'type': 'container', 'items': []};

                if(element.childNodes !== 'undefined') {
                    this.elementFilter(element.childNodes, stateObject[index]['items']);
                }
            }

        });
    }

    render() {
       return (
            <div>
                <div className="state-handler-inner">
                {JSON.stringify(this.state)}
                </div>
                <Button onClick={this.parseContainer}>Create JSON</Button>
            </div>
        );
    }
}