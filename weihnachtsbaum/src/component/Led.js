import React, { Component } from 'react';

class Led extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentId: props.parentId,
            ownId: props.ownId,
            buttonState: props.buttonState,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({buttonState: !this.state.buttonState});
    }

    render() {
        return (
            <button style={this.state.buttonState? styles.backgroundOn:styles.backgroundOff } >

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

