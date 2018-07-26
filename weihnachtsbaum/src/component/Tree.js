import React, { Component } from 'react';
import LedList from "./LedList.js"
import Tools from "./Tools.js"
import InitialLedList from "../data.js"

class Tree extends Component {
    constructor() {
        super();
        this.state = {
            ledList: InitialLedList,
            numberOfLevels: 4,
        };
        //this.addLedRow = this.addLedRow.bind(this);
        this.onTurn = this.onTurn.bind(this);
        this.recursiveTurn = this.recursiveTurn.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.recursiveCreate = this.recursiveCreate.bind(this);
    }

    recursiveTurn(turn, tempArray, seed) {
        console.log("recursiveTurn seed: " + seed)
        console.log("recursiveTurn tempArray: " + JSON.stringify(tempArray))

        // TERMINATION
        if (seed < 1) return;

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

    recursiveCreate(levels, actualLevel, newLed) {
        console.log("actualLevel " + actualLevel);
        //Termination
        if (actualLevel === levels) return;

        var led = {
            label: "div",
            buttonState: false,
            ledList: []
        };

        if (actualLevel === 0) {

            actualLevel++;
            newLed.push(led);
            return (this.recursiveCreate(levels, actualLevel, newLed[0].ledList));
        } else if(actualLevel < levels){
            actualLevel++;
            newLed.push(led);
            newLed.push(led);
            return (this.recursiveCreate(levels, actualLevel, newLed[0].ledList));
            return (this.recursiveCreate(levels, actualLevel, newLed[1].ledList));
        }

    }



    onCreate(levels) {

        let newTree = [];
        let actualLevel = 0;

        this.recursiveCreate(levels, actualLevel, newTree);
        this.setState({ledList: newTree})
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