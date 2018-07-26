import React, { Component } from 'react';
import Led from "./Led.js"

class LedList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { ledList } = this.props;
        console.log("LEDLIST ledList: "+ JSON.stringify(ledList));
        return (
            <div style={styles.ledList}>
                {
                    this.props.ledList.map((led, index) => {
                        return <Led
                            key={index}
                            led={led}
                        />
                    })
                }
            </div>
        );
    }
}

const styles = {
    ledList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        width: "50%",
    }
}

export default LedList;

