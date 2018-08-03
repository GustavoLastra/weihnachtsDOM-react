import React from 'react';
import LedList from "./LedList.js"
import './css/tree.css';
import TreeService from "./shared/service";
import MyContext from "./shared/context";



class Led extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onTurn = this.onTurn.bind(this);
        //this.onTurnSegmentRecursive = this.onTurnSegmentRecursive.bind(this);

    }

    onTurn() {
        const {led} = this.props;
        led.buttonState===false?
            TreeService.update(led.id, true)
            : TreeService.update(led.id, true);
        //this.onTurnSegmentRecursive();

    }

    /*onTurnSegmentRecursive() {
        this.props.onTurnSegmentRecursive();
        console.log("LED onTurnSegment")
    }*/


    render() {
        const { led} = this.props;

        return (
            <div className={"hallo"}>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button onClick={()=>context.update(led.id, led.buttonState)}
                                    className={led.buttonState=== true? "led backgroundOn": "led backgroundOff"}>
                                {led.label}
                            </button>
                        </React.Fragment>
                    )}

                </MyContext.Consumer>
                { led.ledList && led.ledList.length > 0 &&
                <LedList ledList={led.ledList}/>
                }
            </div>
        );
    }


}

export default Led;

