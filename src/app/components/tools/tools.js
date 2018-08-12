import React, { Component } from 'react';
import MyContext from "../../shared/context";
import './tools.css'

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: "Create Tree"
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(context) {
        console.log("onClick");
        if(this.state.buttonLabel === "Create Tree") {
            this.setState({buttonLabel: "Destroy Tree"});
            this.props.onCreate("create");
        } else {
            this.setState({buttonLabel: "Create Tree"})
            this.props.onCreate("destroy");
            context.destroy();
        }
    }

    render() {
        return (
            <div className={"toolsRow"}>
                <div className={"toolItem"}>
                    <h1 className="weihnachsDOMLabel">WeihnachtsDOM</h1>
                </div>
                <div className={"toolItem"}>
                    <MyContext.Consumer>
                        {(context) => (
                        <button onClick={()=>this.onClick(context)}
                                className={"toolsButton"}>{this.state.buttonLabel}</button>
                        )}
                    </MyContext.Consumer>

                </div>

            </div>
        );
    }
}


export default Tools;

