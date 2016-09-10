import React, {Component} from 'react'
import {Link} from 'react-router';

class App extends Component {
    render() {
        let styles = {
            width: '200px',
            margin: '30px auto 0'
        };

        return (
            <div style={styles}>
                <p>
                    <Link to="/todo" activeStyle={{color: 'red'}}>待办事项</Link>|
                    <Link to="/about" activeStyle={{color: 'red'}}>关于</Link>
                </p>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

// export is the App (被处理过的)
export default App
