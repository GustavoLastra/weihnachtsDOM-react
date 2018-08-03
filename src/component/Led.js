import React from 'react';
import LedList from "./LedList.js"
import './css/tree.css';

class Led extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonState: false,
        };
        this.onTurn = this.onTurn.bind(this);
    }

    onTurn() {
        this.state.buttonState===false?
            this.setState({buttonState: true})
            : this.setState({buttonState: false})
    }

    render() {
        {console.log("LED")}
        const { led, buttonsState} = this.props;

        if (buttonsState) {
            return (
                <div className={"hallo"}>
                    <button onClick={this.onTurn}
                            className={"led backgroundOn"}>
                        {led.label}
                    </button>
                    { led.ledList && led.ledList.length > 0 &&
                    <LedList ledList={led.ledList}
                             buttonsState={this.buttonState}/>
                    }
                </div>
            );

        } else {
            return (
                <div className={"hallo"}>
                    <button onClick={this.onTurn}
                            className={"led backgroundOff"}>
                        {led.label}
                    </button>
                    { led.ledList && led.ledList.length > 0 &&
                    <LedList ledList={led.ledList}
                             buttonsState={this.buttonState}/>
                    }
                </div>
            );
        }



    }


}

export default Led;

