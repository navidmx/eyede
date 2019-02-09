import React, { Component } from 'react';
import './App.scss';

import CodeEditor from './codeeditor';

class App extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="App">
                <CodeEditor />
            </div>
        );
    }
}

export default App;
