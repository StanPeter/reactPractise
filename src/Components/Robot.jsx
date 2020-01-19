import React from "react";

function Robot(props) {
    const style = {color: props.color}

    return (

        <div>
            <h4 style={style}>Type: {props.name}</h4>
            <p>Damage: {props.damage}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Robot;