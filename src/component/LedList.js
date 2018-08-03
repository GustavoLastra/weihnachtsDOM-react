import React from 'react';
import Led from "./Led.js"
import './css/tree.css';


function LedList(props) {
    const { ledList } = props;
    return (
        <div className={"ledList"}> {/*style={styles.ledList}*/}
            {console.log("LEDLIST")}
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

