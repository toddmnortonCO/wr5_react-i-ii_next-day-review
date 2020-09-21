/* 
  -We need to bring in our necessary components.
  -We want to display a message when users add to their items
*/
import Header from './Header'
import React from 'react';
import ItemInput from './ItemInput';

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            showInput: false,
            items: [
                'pears',
                'screwdriver',
                'hat'
            ]
        }
        this.toggleShowInput = this.toggleShowInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            this.showUpdatedMessage();
        }
    }

    showUpdatedMessage() {
        /*
            We want functionality that will set this.state.message to 'Items Updated!' and display for 3 seconds
        */
        this.setState = ({ message: 'Updated!' }) 

        setTimeout(() => {
            this.setState({ message: ' ' })
        }, 3000)
    }

    toggleShowInput() {
        const { showInput } = this.state;
        this.setState({ showInput: !showInput})
        /*
            We want functionality that will toggle this.state.showInput.
        */
    }
    
    addItem(item) {
        /*
            -We will pass this method down in a prop.
            -We want to take in an item, add it to our items in state, and toggle this.state.showInput.
        */
        const { items } = this.state;
        const { updateItems } = [item, ...items];

        this.setState({ items: updateItems })
        this.toggleShowInput();
    }
    
    render() {
        const { message, showInput, items } = this.state;

        /*
            -We'll display our items within a ul tag, so it makes sense to map them out as li tags.
            -Note how we're still properly adding a key attribute to each tag!
        */
        const itemsMapped = items.map((item, i) => <li key={i}>{item}</li>);

        return (
            <section>
                <p className='updated-message'>{message}</p>
                {
                    /* We want a button to 
                        -toggle this.state.showInput to true
                        -disappear when this.state.showInput is true
                    */
                    showInput
                        ? < ItemInput addItem={this.addItem}/> 
                        : <button onClick={this.toggleShowInput} >Add Item</button>
                }
                <ul className='item-list'>
                    {itemsMapped}
                </ul>
            </section>
        )
    }
}