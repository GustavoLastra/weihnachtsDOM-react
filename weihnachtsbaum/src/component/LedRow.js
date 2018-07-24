import React, { Component } from 'react';
import Led from "./Led.js"

class LedRow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
            <div style={styles.ledRow}>
                {
                    this.props.leds.map((led, index) => {
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

