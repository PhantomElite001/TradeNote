import React from "react";
export default function Statcard({title,value}) {
    return (
        <div className="statcard">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}