import React, { Component } from 'react';
import LedRow from "./LedRow.js"
import Tools from "./Tools.js"
import TreeData from "../data.js"

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ledRows: TreeData
        };
        this.addLedRow = this.addLedRow.bind(this);
    }

    addLedRow(newLedRow) {
        let tempArray = this.state.ledRows;
        tempArray.push(newLedRow);
        this.setState({ledRows: tempArray});
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.toolsContainer}>
                    <Tools/>
                </div>


                <div style={styles.treeContainer} >
                    {
                        this.state.ledRows.map((ledRow, index) => {
                            return<LedRow
                                key={index}
                                rowId={index}
                                leds={TreeData[index].leds}
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
        width:"80%",
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