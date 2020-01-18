import React, {useState} from 'react';
import '../App.css';
import Robot from "./Robot";

function FunctionalApp() {
    const robots = [
        {name: "ZB503", damage: "54"},
        {name: "ZBST4", damage: "35"},
        {name: "ZXC42", damage: "78"}
    ];
    const [chosenRobot, setChosenRobot] = useState({});
  
    function clickHandler(robot) {
        setChosenRobot({ //rewrites all states inside this hook
            name: robot.name,
            damage: robot.damage
        })
    };
  
    return (
    <div className="App">
        <div>
        {robots.map((robot, index) => (
            <Robot name={robot.name} damage={robot.damage} key={index} id={index}>
            <p>Made in China</p>
            <button onClick={() => {clickHandler(robot)}}>Choose this one!</button>
            </Robot>
        ))}
        </div>
        <div className="your-robot">
        <h5>Your Robot</h5>
        <h6>{chosenRobot.name} : {chosenRobot.damage}</h6  >
        </div>
    </div>
    );
}

export default FunctionalApp;
