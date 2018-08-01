import React, { Component } from 'react';
import Led from "./Led.js"
import './css/Tree.css';


class LedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onTurnSegment = this.onTurnSegment.bind(this);
    }

    onTurnSegment(id, turn) {
        this.props.onTurnSegment(id, turn);
    }

    render() {
        const { ledList } = this.props;
        return (
            <div className={"ledList"}> {/*style={styles.ledList}*/}
                {  this.props.ledList &&
                    this.props.ledList.map((led, index) => {
                        return <Led
                            key={index}
                            id={index}
                            led={led}
                            onTurn={this.onTurnSegment}
                        />
                    })
                }
            </div>
        );
    }
}

const styles = {
    ledList: {
        /*display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",*/
        width: "50%",
    },

    ledlistRow : {
        display: "grid",
        gridRowGap: "50px",
        gridTemplateColumns: "auto auto auto",
        backgroundColor: "#2196F3",
        padding: "10px"

    }

}

export default LedList;

