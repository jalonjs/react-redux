import React, { Component } from 'react'

class Content extends Component {
    render() {
        let items = this.props.items

        return (
            <ul>
                {items.map(v => <LiItem item={v} key={v} deleteItem={this.props.deleteItem} />)}
            </ul>
        )
    }
}

class LiItem extends Component {
    render() {
        return (
            <li>
                <span style={{marginRight: '4px'}}>{this.props.item}</span>
                <button onClick={this.props.deleteItem.bind(this, this.props.item)}>delete</button>
            </li>
        )
    }
}

export default Content
