import React, { Component } from 'react';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onClickCreate = this.onClickCreate.bind(this);
    }

    onClickCreate() {
        this.props.onCreate();
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

