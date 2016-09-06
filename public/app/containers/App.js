import React, {Component} from 'react'
import AddBar from '../components/AddBar'
import Content from '../components/content'
import {connect} from 'react-redux'
import * as ItemsActions from '../actions'
import {bindActionCreators} from 'redux'


class App extends Component {

    static propTypes = {
        items: React.PropTypes.array,
        filter: React.PropTypes.string
    };

    render() {
        let styles = {
            width: '200px',
            margin: '30px auto 0'
        };
        const actions = this.props.actions;

        return (
            <div style={styles}>
                <h2>待办事项</h2>
                <AddBar addItem={actions.addItem} deleteAll={actions.deleteAll}/>
                <Content items={this.props.items} deleteItem={actions.deleteItem}/>
            </div>
        )
    }
}

export default connect(state => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App)
