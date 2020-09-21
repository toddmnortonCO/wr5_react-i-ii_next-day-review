/* 
    We need to get the user's name when the component mounts.
*/

import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    getUserName() {
        const name = window.prompt('What is your name?');

        this.setState({ name });
    }

    render() {
        const { name } = this.state;
        return (

            <h2>{name}'s special list</h2>
        )
    }
}