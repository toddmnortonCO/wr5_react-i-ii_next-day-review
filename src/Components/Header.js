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

    }

    render() {
        return (
            {/*
                We want the view to display "<NAME'S> Special List".
            */}
        )
    }
}