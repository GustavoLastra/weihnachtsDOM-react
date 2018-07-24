import React, { Component } from 'react';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    onClick() {
        this.setState({buttonState: !this.state.buttonState});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log("this.state.value: " + this.state.value);
    }

    render() {
        return (
            <div style={styles.toolsRow}>
                <div style={styles.toolItem}>
                    <input style={styles.inputNumber}
                           placeholder="Number of levels..."
                           type="number"
                           value={this.state.value}
                           onChange={this.handleChange}
                    />
                </div>
                <div style={styles.toolItem}>
                    <button style={styles.createButton}>Create Tree</button>
                </div>
                <div style={styles.toolItem}>
                    <button style={styles.createButton}>Turn On</button>
                </div>
            </div>
        );
    }
}

const styles = {
    toolsRow: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-end",
        width: "95%",
        margin: "auto"
    },

    toolItem: {
        margin:"1%"
    },

    inputNumber: {
        borderRadius: "5%",
        padding: "15px 32px",
    },

    createButton: {
        backgroundColor: "#008CBA",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none"

}
}

export default Tools;

