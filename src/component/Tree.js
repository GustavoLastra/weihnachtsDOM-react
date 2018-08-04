import React from 'react';
import LedList from "./LedList.js";
import Tools from "./Tools.js";
import MyContext from "./shared/context";
import './css/tree.css';

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTree: false
        };
        this.onCreate = this.onCreate.bind(this);
    }

    onCreate() {
        this.setState({showTree: true })
    }

    render() {
        return (
            <div className={"rootContainer"}>
                <div className={"toolsContainer"}>
                    <Tools
                        onTurn={this.onTurn}
                        onCreate={this.onCreate}
                    />
                </div>
                <div className={"treeContainer"} >
                    { this.state.showTree &&
                    <MyContext.Consumer>
                        {(context) => (
                            <React.Fragment>
                                <LedList
                                    ledList={context.state.tree}
                                />
                            </React.Fragment>
                        )}
                    </MyContext.Consumer>
                    }
                    {!this.state.showTree &&
                    <div className="hint">Please click on the "Create Tree" button</div>
                    }
                </div>
            </div>
        );
    }
}

export default Tree;