import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './layout.js';

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
