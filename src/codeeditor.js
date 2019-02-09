import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

export default class CodeEditor extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    onChange(newValue, e) {
        console.log(newValue, e);

        const editor = this.ace.editor; // The editor object is from Ace's API
        console.log(editor.getValue()); // Outputs the value of the editor
    }
    render() {
        const editor = this.ace.editor;

        editor.insert("hello\nmy\mname\nis\njason\nhi");
        
        return (
            <div>
                <ReactAce
                    setReadOnly={false}
                    onChange={this.onChange}
                    style={{ height: '400px' }}
                    ref={(instance) => {
                        this.ace = instance;
                    }} // Let's put things into scope
                />
            </div>
        );
    }

    interpretVoice = function(command) {
        if(command.includes("go to")) {
            voiceGoTo(command);
        }
        else if(command.includes("read")) {
            voiceRead(command);
        }
        else if(command.includes("new")) {
            voiceMakeNew(command);
        }
    }

    //figures out where to go, given the string command
    voiceGoTo = function(command) {
        if(command.includes("line")) {
            if(command.length > command.indexOf("line") + 4)
                index = command.indexOf("line") + 5;

            lineNum = parseInt(command.subString(index, command.length));

            if(command.includes("end"))
                goToLine(lineNum, 1);

            goToLine(lineNum, 0);
        }
        if(command.includes("loop")) {
            goToCheckpoint(command);
        }
        if(command.includes("next")) {
            goToObject(command);
        }
    }

    //goes to specific line
    //loc 0 = start, loc 1 = end
    goToLine = function(lineNum, loc) {
        const editor = this.ace.editor;

        if(loc == 0) {
            editor.goToLine(lineNum);
        }
        //goes to line below and then goes 
        //to the left once (to go to end of prev line)
        else if(loc == 1) {
            editor.goToLine(lineNum + 1);
            editor.navigateLeft(1);
        }
    }


    goToCheckpoint = function(command) {

    }


    voiceRead = function(command) {

    }
    
}
