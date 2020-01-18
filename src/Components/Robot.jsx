import React from "react";

function Robot(props) {
    return (
        <div>
            <h4>Type: {props.name}</h4>
            <p>Damage: {props.damage}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Robot;