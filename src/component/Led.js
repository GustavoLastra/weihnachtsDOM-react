import React, { Component } from 'react';
import LedList from "./LedList.js"


class Led extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {

    }

    render() {

        const { led } = this.props;

        return (
            <div id="hola">
                <button style={led.buttonState=== true? styles.backgroundOn:styles.backgroundOff } >


                    {led.label}


                </button>
                <LedList ledList={led.ledList}/>
            </div>

        )

/*        if (led.ledList.length) {
            console.log("LED True led: "+ JSON.stringify(led));
            return (
                <LedList
                ledList={led.ledList}/>
            );

        } else {
            console.log("LED False led: "+ JSON.stringify(led));
            return (
                <button style={this.props.led.buttonState=== true? styles.backgroundOn:styles.backgroundOff } >
                    {this.props.led.label}
                </button>
            );
        }*/

    }
}

const styles = {
    backgroundOn : {
        backgroundColor: '#ffef96',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "4%",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "10%",
        color: "#007bff",
        fontWeight: "bold"
},
    backgroundOff : {
        backgroundColor: '#b2b2b2',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "4%",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "10%",
        color: "white",
        fontWeight: "bold"


    },
}

export default Led;

