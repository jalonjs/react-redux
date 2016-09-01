import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="pure-form">
                <input type="text" onKeyUp={this.props.filterItem} placeholder="请输入查找的item" />
            </div>
        )
    }
}


export default SearchBar
