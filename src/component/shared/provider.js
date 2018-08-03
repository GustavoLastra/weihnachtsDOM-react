// Then create a provider Component
import React, { Component } from 'react';
import MyContext from "./context";
import InitialledList from "../../data.js"


class MyProvider extends Component {
    state = {
        tree: InitialledList
    }

    turn = (id, newButtonState) => {
        console.log("MYPROVIDER turn id: " + id + " newButtonState: " + newButtonState);
    }


    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                update: (id, turn) => this.turn(id, turn)
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;