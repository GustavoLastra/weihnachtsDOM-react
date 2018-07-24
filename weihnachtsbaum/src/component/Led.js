import React, { Component } from 'react';

class Led extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {}

    render() {
        return (
            <button style={this.props.buttonState=== true? styles.backgroundOn:styles.backgroundOff } >

            </button>
        );
    }
}

const styles = {
    backgroundOn : {
        backgroundColor: '#ffef96',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "20%",
        paddingTop: "10%",
        cursor: "pointer",
        margin: "1% 1%",
        borderRadius: "50%",
        outline: "none"
},
    backgroundOff : {
        backgroundColor: '#b2b2b2',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "20%",
        paddingTop: "10%",
        cursor: "pointer",
        margin: "1% 1%",
        borderRadius: "50%",
        outline: "none"

    },
}

export default Led;

