import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

export default class AddBar extends Component {

    handleClick() {
        const text = findDOMNode(this.refs.input).value.trim();
        this.refs.input.value = '';
        if (text) {
            this.props.addItem(text);
        }
    }

    render() {
        const { className, ...others } = this.props;
        return (
            <div className="pure-form" { ...others } >
                <input type="text" placeholder="添加什么任务?" ref="input"/>
                <button onClick={ (e)=> this.handleClick(e) } className="pure-button button-secondary">添加</button>
                <button onClick={this.props.deleteAll} style={{ marginLeft:10 }} className="pure-button button-error">
                    deleteAll
                </button>
            </div>
        )
    }
}