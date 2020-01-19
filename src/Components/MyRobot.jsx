import React from "react";
import '../App.css';
import Radium from "radium";

function MyRobot(props) {
    const style = {
        backgroundColor: "blue",
        color: "silver",
        ":hover": {
          backgroundColor: "lightblue",
          color: "white"
        }
      };

    return (
        <div className="your-robot">
            <h5>Your Robot {props.inputRobotVal}</h5>
            <input
                type="text"
                onChange={(event) => {props.inputRobotFunc(event)}}
                value={props.inputRobotVal}
                name="inputRobotVal" 
            />
            <button 
                style={style}
                onClick={props.clickHandlerChange} >
                change
            </button>
            <h6>{props.chosenRobot.name}</h6>
        </div>
    )
}

export default Radium(MyRobot);