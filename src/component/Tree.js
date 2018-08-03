import React from 'react';
import LedList from "./LedList.js";
import Tools from "./Tools.js";
import TreeService from "./shared/service";
import MyContext from "./shared/context";

//import InitialLedList from "../data.js"


class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ledList: "",
            numberOfLevels: 6,
            showTree: false
        };
        //this.addLedRow = this.addLedRow.bind(this);
        this.onTurn = this.onTurn.bind(this);
        this.onTurnSegmentRecursive = this.onTurnSegmentRecursive.bind(this);
        this.recursiveTurn = this.recursiveTurn.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    recursiveTurn(actuallevel,levels, turn, tempArray) {
        console.log("recursiveTurn seed: " + actuallevel)
        console.log("recursiveTurn tempArray: " + JSON.stringify(tempArray))

        // TERMINATION
        if (actuallevel === levels) return;

        // BASE
        if (actuallevel < levels) {
            tempArray.map(object => {
                object.buttonState= turn;
                console.log("object.buttonState: " + object.buttonState)

                // RECURSION
                actuallevel++;
                return this.recursiveTurn(actuallevel,levels, turn, object.ledList);
            })
        }
    }

    onTurnSegmentRecursive() {
        console.log("TREE onTurnSegment")
    }


    onTurn(turn) {
        let tempArray = this.state.ledList;
        let levels = this.state.numberOfLevels;
        let actuallevel = 0;

        if (turn === true){
            this.recursiveTurn(actuallevel,levels, true, tempArray )
        }
        else{
            this.recursiveTurn(actuallevel,levels, false, tempArray)
        }
        this.setState({ledList: tempArray})
    }

    onCreate() {
        /*let tree = TreeService.getTree();
        this.setState({ledList: tree })*/
        this.setState({showTree: true })
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
                    { this.state.showTree &&
                    <MyContext.Consumer>
                        {(context) => (
                            <React.Fragment>
                                <LedList
                                    ledList={context.state.tree}
                                />
                            </React.Fragment>
                        )}
                    </MyContext.Consumer>
                    }
                </div>
                <p>{console.log(React.version)}</p>
            </div>





        );
    }
}

const styles = {

    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-arround",
        width:"98%",
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
        /*flexDirection: "row",
        justifyContent: "center",
        alignItems: "",*/
        backgroundColor: "#228b22",
        paddingTop: "2%",
        paddingBottom: "5%",
        width: "100%",
            /*
                    display: "flex",
            */
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        marginTop: "2%"

    },



}

export default Tree;

/*
recursiveCreate(levels, actualLevel, newLed) {
    console.log("actualLevel " + actualLevel);
    //Termination
    if (actualLevel === levels) return;
    var led = {
        label: "div",
        buttonState: false,
        ledList: []
    };
    //let random = Math.floor((Math.random() * 100) + 1);
    if (actualLevel === 0) {
        actualLevel++;
        newLed.push(led);
        return (this.recursiveCreate(levels, actualLevel, newLed[0].ledList));
    } else if(actualLevel < levels && actualLevel===1){
        actualLevel++;
        newLed.push(led);
        newLed.push(led);
        return (this.recursiveCreate(levels, actualLevel, newLed[0].ledList));
        return (this.recursiveCreate(levels, actualLevel, newLed[1].ledList));
    } else if(actualLevel < levels && actualLevel===2) {
        actualLevel++;
        newLed.push(led);
        return (this.recursiveCreate(levels, actualLevel, newLed[0].ledList));
    }
}



onCreate(levels) {

    let newTree = [];
    let actualLevel = 0;
    this.setState({numberOfLevels: levels});
    this.recursiveCreate(levels, actualLevel, newTree);
    console.log("newTree" + JSON.stringify(newTree));
    this.setState({ledList: newTree})
}*/
