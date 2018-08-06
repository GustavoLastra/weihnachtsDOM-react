import React, { Component } from 'react';
import MyContext from "./context";
import InitialledList from "../data.js"


class MyProvider extends Component {
    state = {
        tree: InitialledList,
    }

    turn = (id, newButtonState) => {
        console.log("id: " + id);
        let temp= this.state.tree;
        let found = false;
        this.scan(temp, id, newButtonState, found)
        this.setState({tree: temp});
    }

    scan = (obj, id, newButtonState, found) => {
        if (found===true) {
            obj.map(led =>{
                led.buttonState = newButtonState;
                this.scan(led.ledList, id, newButtonState, found);
            })
        } else {
            obj.map(led =>{
                if (led.id === id) {
                    found = true;
                    led.buttonState = newButtonState;
                    return this.scan(led.ledList, id, newButtonState, found);
                } else if(found===false){
                    //recursion
                    return this.scan(led.ledList, id, newButtonState, found);
                }
            })
        }
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