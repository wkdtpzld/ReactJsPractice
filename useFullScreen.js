import React, { useEffect, useRef, useState } from "react";

const useFullScreen = (callback) => {
    const element = useRef();

    const runCb = (boolean) => {
        if (callback && typeof callback === "function") {
            callback(boolean);
        }
    };

    const triggerFull = () => {
    if (element.current) {
        if (element.current.requestFullscreen) {
            element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
            element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
            element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
            element.current.msRequestFullscreen();
        }
    }
    runCb(true);
    };

    const exitFull = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    runCb(false);
    };
    return { element, triggerFull, exitFull };
};

export default function App() {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are Full" : "We are Smalll");
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullS);

    return (
    <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>
            <img
                src="https://ichef.bbci.co.uk/news/800/cpsprodpb/17805/production/_105016269_roxy1.jpg.webp"
                alt="image"
            />
            <button onClick={exitFull}>Exit Fullscreen</button>
        </div>

    <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
    );
}
