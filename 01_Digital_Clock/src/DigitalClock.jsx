import React, { useState } from "react";

function Clock(){

    const currTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    const [time, setTime] = useState(currTime);

    const update = ()=>{
        const currTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
        setTime(currTime)
    }

    setInterval(() => {
        update();
    }, 1000);
    return(
        <>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"

        }}>
            <h2 style={{
            width: "150px",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            border: "2px solid yellow",
            borderRadius: "15px",
            boxShadow: "0 2px 4px 8px"

            }}> {time} </h2>
        </div>
        </>
    )
}

export default Clock;