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
            <div className={"toolsRow"}>
                <div className={"toolItem"}>
                    <h1 className="weihnachsDOMLabel">WeihnachtsDOM</h1>
                </div>
                <div className={"toolItem"}>
                    <button onClick={this.onClickCreate} className={"toolsButton"}>Create Tree</button>
                </div>

            </div>
        );
    }
}


export default Tools;

