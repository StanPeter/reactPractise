import React, {Component} from 'react';
import '../App.css';
import Radium from "radium";
import Robot from "./Robot";
import MyRobot from "./MyRobot";

class App extends Component {
  state = {
    robots: [
      {name: "ZB503", damage: "54", id: "gg23g"},
      {name: "ZBST4", damage: "35", id: "4yg3g"},
      {name: "ZXC42", damage: "78", id: "j4j42"}
    ],
    chosenRobot: {},
    inputRobotVal: ""
  }

  clickHandler = (robot) => {
    this.setState( { //setState merges new state with old so robots don't get overwritten
        chosenRobot: {
          ...robot
        }
    });
  };

  clickHandlerDelete = (robotIndex) => {
    const robots = [...this.state.robots];
    robots.splice(robotIndex, 1);

    this.setState({
      robots: robots
    });
  }

  clickHandlerChange = () => { 
    const robotIndex = this.state.robots.findIndex(robot => {
      return this.state.chosenRobot.id === robot.id;
    });
    
    const foundRobot = this.state.robots[robotIndex];
    foundRobot.name = this.state.inputRobotVal;
    this.clickHandler(foundRobot);
  }

  inputRobot = (event) => {
    this.setState( {
      inputRobotVal: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "yellow"
    }

    return (
      <div className="App">
        <div>
          {this.state.robots.map((robot, index) => (
            <Robot
              name={robot.name}
              damage={robot.damage}
              key={robot.id}
              color={robot.name === this.state.chosenRobot.name ? "green" : "inherit"}
            >
              <p>Made in China</p>
              <button style={style} onClick={() => { this.clickHandler(robot) }}>Choose this one!</button>
              <button style={style} onClick={() => this.clickHandlerDelete(index)}>Delete</button>
            </Robot>
          ))}
        </div>
        <MyRobot 
          chosenRobot={this.state.chosenRobot} 
          inputRobotVal={this.state.inputRobotVal} 
          inputRobotFunc={this.inputRobot}
          clickHandlerChange={this.clickHandlerChange}
        />
      </div>
    );
  }
}

export default Radium(App);

