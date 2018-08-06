import React from 'react';
import LedList from "./LedList.js"
import '../css/tree.css';
import MyContext from "../shared/context";

class Led extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { led} = this.props;
        return (
            <div className={"ledDiv"}>
                {console.log("LED led.id: " + led.id)}
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button onClick={()=>context.update(led.id, !led.buttonState)}
                                    className={led.buttonState=== true? "led backgroundOn": "led backgroundOff"}>
                                {led.label}
                            </button>
                        </React.Fragment>
                    )}

                </MyContext.Consumer>
                {led.ledList && led.ledList.length > 0 &&
                <LedList ledList={led.ledList}/>
                }
            </div>
        );
    }


}

export default Led;

