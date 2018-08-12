import React, { Component } from 'react';
import './tools.css'

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: "Create Tree"
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if(this.state.buttonLabel == "Create Tree") {
            this.setState({buttonLabel: "Destroy Tree"});
            this.props.onCreate("create");
        } else {
            this.setState({buttonLabel: "Create Tree"})
            this.props.onCreate("destroy");
        }
    }

    render() {
        return (
            <div className={"toolsRow"}>
                <div className={"toolItem"}>
                    <h1 className="weihnachsDOMLabel">WeihnachtsDOM</h1>
                </div>
                <div className={"toolItem"}>
                    <button onClick={this.onClick} className={"toolsButton"}>{this.state.buttonLabel}</button>
                </div>

            </div>
        );
    }
}


export default Tools;

