import React, { Component } from 'react';
import LedRow from "./LedRow.js"
import Tools from "./Tools.js"
import TreeData from "../data.js"

class Tree extends Component {
    constructor() {
        super();
        this.state = {
            ledRows: TreeData.ledRows,
        };
        //this.addLedRow = this.addLedRow.bind(this);
        this.onTurn = this.onTurn.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    onTurn(turn) {
        let tempArray = this.state.ledRows;
        if (turn === true){
            tempArray.map(ledRow => {
                ledRow.leds.map(led =>  led.buttonState = true)
            })
        }
        else{
            tempArray.map(ledRow => {
                ledRow.leds.map(led => led.buttonState = false)
            })

        }
        this.setState({ledRows: tempArray})
    }

    onCreate(levels) {
        let newTree = {"ledRows": []};
        var ledCounter;
        var row;

        for (row = 0, ledCounter = 1; row < levels; row++, ledCounter++ ) {    //ledCounter*=2
            let newLeds = {"leds": []}
            for (var i=0 ; i  < ledCounter ; i++ ) {
                let newLed = { label: "div", parentId: 0, ownId: 0, buttonState : false };
                newLeds.leds.push(newLed);
            }
            newTree.ledRows.push(newLeds);
        }

        this.setState({ledRows: newTree.ledRows})

    }


    render() {
        return (
            <div style={styles.container}>
                <div style={styles.toolsContainer}>
                    <Tools
                        onTurn={this.onTurn}
                        onCreate={this.onCreate}
                    />
                </div>


                <div style={styles.treeContainer} >
                    {
                        this.state.ledRows.map((ledRow, index) => {
                            return<LedRow
                                key={index}
                                rowId={index}
                                leds={ledRow.leds}
                                addLedRow={this.addLedRow}
                            />
                        })
                    }
                </div>
            </div>





        );
    }
}

const styles = {

    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-arround",
        width:"90%",
        margin: "auto"
    },

    toolsContainer: {
        display: "flex",
        flexFlow: "row wrap",
        width: "100%",
        margin: "auto",
        backgroundColor: "#ffcc66",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        marginTop: "5%"
    },

    treeContainer: {
        flexDirection: "column",
        backgroundColor: "#228b22",
        width: "100%",
        margin: "auto",
        display: "flex",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        marginTop: "2%"

    },



}

export default Tree;