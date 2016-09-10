import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ItemsActions from '../actions'
import {bindActionCreators} from 'redux'
import AddBar from './addBar'
import Content from './content'

class Todo extends Component {
    render() {
        return (
            <div>
                <h2>待办事项</h2>
                <AddBar addItem={this.props.actions.addItem} deleteAll={this.props.actions.deleteAll}/>
                <Content items={this.props.items} deleteItem={this.props.actions.deleteItem}/>
            </div>
        )
    }
}

Todo.propTypes = {
    items: React.PropTypes.array,
    filter: React.PropTypes.string
};

export default connect(state => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Todo)
