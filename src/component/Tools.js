import React, { Component } from 'react';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            buttonName: "Turn On"
        };
        this.onClickCreate = this.onClickCreate.bind(this);
        this.onClickTurn = this.onClickTurn.bind(this);
    }

    onClickCreate() {
        this.props.onCreate();
    }

    onClickTurn() {
        this.state.buttonName==="Turn On"
            ? (this.setState({buttonName: "Turn Off"}),
                this.props.onTurn(true)
            ):(
                this.setState({buttonName: "Turn On"}),
                    this.props.onTurn(false)
            ) ;
    }


    render() {
        return (
            <div style={styles.toolsRow}>
                <div style={styles.toolItem}>
                    <button onClick={this.onClickTurn} style={this.state.buttonName==="Turn On"?styles.primaryButton:styles.dangerButton}>{this.state.buttonName}</button>
                </div>
                <div style={styles.toolItem}>
                    <button onClick={this.onClickCreate} style={styles.primaryButton}>Create Tree</button>
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

    primaryButton: {
        backgroundColor: "#007bff",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "1em",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none"

    },
    dangerButton: {
        backgroundColor: "#dc3545",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "1em",
        cursor: "pointer",
        borderRadius: "50%",
        outline: "none"

    },
}

export default Tools;

/*
this.handleChange = this.handleChange.bind(this);

handleChange(event) {
    this.setState({value: event.target.value});
}

<div style={styles.toolItem}>
    <input style={styles.inputNumber}
           placeholder="Number of levels..."
           type="number"
           value={this.state.value}
           onChange={this.handleChange}
    />
</div>*/
