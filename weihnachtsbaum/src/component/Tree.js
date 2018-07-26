import React, { Component } from 'react';
import LedList from "./LedList.js"
import Tools from "./Tools.js"
import InitialLedList from "../data.js"

class Tree extends Component {
    constructor() {
        super();
        this.state = {
            ledList: InitialLedList,
            numberOfLevels: 3,
        };
        //this.addLedRow = this.addLedRow.bind(this);
        this.onTurn = this.onTurn.bind(this);
        this.recursiveTurn = this.recursiveTurn.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    recursiveTurn(turn, tempArray, seed) {
        console.log("recursiveTurn seed: " + seed)
        console.log("recursiveTurn tempArray: " + JSON.stringify(tempArray))

        // TERMINATION
        if (seed < 0) return;

        // BASE
        tempArray.map(object => {
            object.buttonState= turn;
            console.log("object.buttonState: " + object.buttonState)

            // RECURSION
            seed--;
            return this.recursiveTurn(turn, object.ledList, seed);
        })


    }

    onTurn(turn) {
        let tempArray = this.state.ledList;
        let seed = this.state.numberOfLevels;

        if (turn === true){
            this.recursiveTurn(true, tempArray, seed)
        }
        else{
            this.recursiveTurn(false, tempArray, seed)
        }
        this.setState({ledList: tempArray})
    }

    onCreate(levels) {
        let newTree = {ledList: []};
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
                        <LedList
                            ledList={this.state.ledList}
                        />

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