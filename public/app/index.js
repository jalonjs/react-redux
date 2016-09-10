import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, hashHistory} from 'react-router'
import routes from './routes'
import configureStore from './configureStore'

// 初始数据
const initialState = {
    items: ['抽烟', '喝酒', '烫头'],
    filter: ''
};

const store = configureStore(initialState);

function renderDevTools(store) {
    if (__DEBUG__) {
        let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react')

        return (
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor}/>
            </DebugPanel>
        )
    }

    return null
}

render(
    <div>
        <Provider store={store}>
            <Router history={hashHistory}>
                {routes}
            </Router>
        </Provider>
        {renderDevTools(store)}
    </div>,
    document.getElementById('app'));
