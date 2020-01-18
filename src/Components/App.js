import React, {Component} from 'react';
import '../App.css';
import Robot from "./Robot";
import MyRobot from "./MyRobot";

class App extends Component {
  state = {
    robots: [
      {name: "ZB503", damage: "54"},
      {name: "ZBST4", damage: "35"},
      {name: "ZXC42", damage: "78"}
    ],
    chosenRobot: {},
    inputRobotVal: ""
  }

  clickHandler = (robot) => {
    this.setState( { //setState merges new state with old so robots don't get overwritten
        chosenRobot: {
          name: robot.name,
          damage: robot.damage
        }
    });
  };

  inputRobot = (event) => {
    this.setState( {
      inputRobotVal: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.robots.map((robot, index) => (
            <Robot name={robot.name} damage={robot.damage} key={index} id={index}>
              <p>Made in China</p>
              <button onClick={() => {this.clickHandler(robot)}}>Choose this one!</button>
            </Robot>
          ))}
        </div>
        <MyRobot 
          chosenRobot={this.state.chosenRobot.name} 
          inputRobotVal={this.state.inputRobotVal} 
          inputRobotFunc={this.inputRobot}
        />
      </div>
    );
  }
}

export default App;
