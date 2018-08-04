import React from 'react';
import LedList from "./LedList.js";
import Tools from "./Tools.js";
import TreeService from "./shared/service";
import MyContext from "./shared/context";
import './css/tree.css';


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
        this.setState({showTree: true })
    }

    render() {
        return (
            <div className={"rootContainer"}>
                <div className={"toolsContainer"}>
                    <Tools
                        onTurn={this.onTurn}
                        onCreate={this.onCreate}
                    />
                </div>

                <div className={"treeContainer"} >
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
                    { !this.state.showTree &&
                    <div className="hint">Please click on the "Create Tree" button</div>
                    }
                </div>
                <p>{console.log(React.version)}</p>
            </div>
        );
    }
}

export default Tree;