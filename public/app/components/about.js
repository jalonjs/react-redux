import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ItemsActions from '../actions'
import {bindActionCreators} from 'redux'
import AddBar from './addBar'
import Content from './content'

class About extends Component {
    render() {
        return (
            <div>
                <h2>关于</h2>
                <p>react-redux router 后端渲染</p>
            </div>
        )
    }
}

About.propTypes = {
    items: React.PropTypes.array,
    filter: React.PropTypes.string
};

export default connect(state => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(About)
