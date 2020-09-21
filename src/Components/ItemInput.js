/*
    -If a user has started typing an item and attempts to navigate away before submitting, let's warn them they'll lose their data if they proceed.
*/

import React from 'react';


export default class ItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.onUnload) 
    }

    componentWillUnmount() {
        const { item } = this.state;

        if (!item.trim()) {
            window.removeEventListener('beforeunload', this.onUnload)
        }
    }

    onUnload(e) {
        e.preventDefault();
        e.returnValue('');
    }

    handleChange(e) {
        this.setState({ item: e.target.value })

    }

    handleSubmit(e) {
        /*
            -Notice our submit is within a form. We'll need to prevent the default browser submission action so things don't reload.
            -We'll prevent users from submitting empty strings or only spaces.
            -We'll add the item to our previous items list and reset this.state.item to its initial value.
        */
        e.preventDefault();

        const { item } = this.state;
        const { addItem } = this.props;

        if (!item.trim()) return; 

        addItem(item);
        this.setState({ item: '' });
    }
    
    render() {
        
        const { item } = this.state;

        return (
            <form>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={item}
                    placeholder='add item and press enter' />
                <input type='submit' onClick={this.handleSubmit} hidden />
            </form>
        )
    }
}