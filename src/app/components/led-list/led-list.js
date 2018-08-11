import React from 'react';
import Led from "../led/led.js"
import './led-list.css'

function LedList(props) {
    const { ledList } = props;
    return (
        <div className={"ledList"}>
            {  ledList &&
                ledList.map((led, index) => {
                    return <Led
                        key={index}
                        led={led}
                    />
                })
            }
        </div>
    );
}

export default LedList;

