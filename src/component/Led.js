import React, { Component } from 'react';
import LedList from "./LedList.js"
import './css/Tree.css';


class Led extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onClickTurn = this.onClickTurn.bind(this);
    }

    onClickTurn() {
        this.props.led.buttonState===false
            ? (
                    this.props.onTurn(this.props.id, true)
            ):(
                    this.props.onTurn(this.props.id, false)
            ) ;
    }

    render() {

        const { led } = this.props;
        return (
            <div className={"hallo"}>
                    <button onClick={this.onClickTurn} className={led.buttonState=== true? "backgroundOn": "backgroundOff"}> {/*style={led.buttonState=== true? styles.backgroundOn:styles.backgroundOff }*/}
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
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "50 px",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "10%",
        fontWeight: "bold",
        height: "25px",
        margin:"25px",
        backgroundColor: '#ffef96',
        color: "black",
    },
    backgroundOff : {
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "50 px",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none",
        /*textAlign: "center",*/
        textDecoration: "none",
        fontSize: "10%",
        fontWeight: "bold",
        height: "25px",

        backgroundColor: '#b2b2b2',
        color: "white",

        margin: "25px",
    },

    content: {
    }
}

export default Led;

