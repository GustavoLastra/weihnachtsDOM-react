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
        let temp= this.state.tree;
        this.scan(temp, id, newButtonState)
        this.setState({tree: temp});
        console.log("turn new tree: " + JSON.stringify(this.state.tree))
    }

    scan = (obj, id, newButtonState) => {
        console.log("obj: " + JSON.stringify(obj))
        obj.map(led =>{
            if (led.id === id) {
                console.log("if (led.id === id)" );
                console.log("led.buttonState: "+ led.buttonState );
                led.buttonState = newButtonState;
                console.log("led.buttonState: "+ led.buttonState );
            }
            if(led.ledList.length) {
                //recursion
                this.scan(led.ledList, id, newButtonState)
            }

        })

    };


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