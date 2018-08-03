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
        let found = false;
        this.scan(temp, id, newButtonState, found)
        this.setState({tree: temp});
        //console.log("turn new tree: " + JSON.stringify(this.state.tree))
    }

    scan = (obj, id, newButtonState, found) => {
        if (found===true) {
            console.log("if found===true" );
            obj.map(led =>{
                led.buttonState = newButtonState;
                this.scan(led.ledList, id, newButtonState, found)
            })
        } else {
            obj.map(led =>{
                if (led.id === id) {
                    found = true;
                    console.log("ELSE if (led.id === id)" );
                    console.log("led.buttonState: "+ led.buttonState );
                    led.buttonState = newButtonState;
                    console.log("led.buttonState: "+ led.buttonState );
                    this.scan(led.ledList, id, newButtonState, found);
                } else if(found===false){
                    //recursion
                    console.log("ELSE" );
                    this.scan(led.ledList, id, newButtonState, found);
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