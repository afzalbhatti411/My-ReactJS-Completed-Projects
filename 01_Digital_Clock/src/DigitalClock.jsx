/* VERSION 1: (Not Recommended)
  Problem: This version creates a new interval on every render, 
  leading to a memory leak and performance issues.

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
*/
...........................................
/* VERSION 2: (Best Practice)
  Solution: Uses useEffect to ensure the interval starts only once 
  and includes a cleanup function to prevent memory leaks.

import React, { useEffect, useState } from "react";

function Clock(){

    const formatedTime = ()=> new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: '2-digit',
        second: "2-digit",
        hour12: true
    })
    const [time, setTime] = useState(formatedTime());

    useEffect(()=>{
        setInterval(() => {
            setTime(formatedTime())
        }, 1000);
        
    }, [])
    console.log(time)
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

            }}>{time} </h2>
            
             </div>
        </>
    )
}

export default Clock;
*/
..................................................
/*  
Version 3 Improvements:

Memory Management: Added return () => clearInterval(intervalId) inside useEffect to stop "zombie" processes.

Architectural Optimization: Moved formatedTime to the Module Scope (outside the component). This ensures the function is created once in memory, rather than being re-declared 60 times every minute.

Scope Logic: Utilized Vanilla JS Lexical Scoping to allow the component to access the helper function from the outer scope.
*/

import React, { useEffect, useState } from "react";

    const formatedTime = ()=> new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: '2-digit',
        second: "2-digit",
        hour12: true
    })

function DigiClock(){

    const [time, setTime] = useState(formatedTime());
    console.log(time);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(formatedTime())
        }, 1000);

        return ()=> clearInterval(intervalId);

    }, [])
    return(
        <div>
            <h2>{time}</h2>
        </div>
    )
}

export default DigiClock;







