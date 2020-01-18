import React from "react";
import '../App.css';

function MyRobot(props) {
    return (
        <div className="your-robot">
            <h5>Your Robot {props.inputRobotVal}</h5>
            <input
                type="text"
                onChange={(event) => {props.inputRobotFunc(event)}}
                value={props.inputRobotVal}
                name="inputRobotVal" 
            />
            <h6>{props.chosenRobot}</h6>
        </div>
    )
}

export default MyRobot;