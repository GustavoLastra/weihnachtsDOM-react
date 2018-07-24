import React, { Component } from 'react';
import Led from "./Led.js"

class LedRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowId: props.rowId,
            leds: props.leds
        };
        this.addLed = this.addLed.bind(this);
    }

    addLed(newLed) {
        let tempArray = this.state.leds;
        tempArray.push(newLed);
        this.setState({leds: tempArray});
    }

    render() {
        return (
            <div style={styles.ledRow}>
                {
                    this.state.leds.map((led, index) => {
                        return<Led
                            key={index}
                            parentId={led.parentId}
                            ownId={led.ownId}
                            buttonState={led.buttonState}
                        />
                    })
                }

            </div>
        );
    }
}

const styles = {
    ledRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        width: "80%",
    }
}

export default LedRow;

