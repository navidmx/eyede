import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './layout.js';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/github';

class App extends Component {
    codeOnChange(newValue) {
        console.log(newValue);
    }
    render() {
        return (
            <div className="App">
                <AceEditor
                    mode="python"
                    theme="github"
                    onChange={this.codeOnChange}
                    name="editor"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        );
    }
}

export default App;
