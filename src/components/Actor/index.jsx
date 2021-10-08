import React from "react";

import './style.css';

const Actor = ({name, as}) => {
    return (
            <div className="actor-item">
                <h4>{name}</h4>
                <p>as {as}</p>
            </div>
    )
}

export default Actor;