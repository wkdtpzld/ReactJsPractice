import React, { useEffect, useRef } from "react";

const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }

    const fireNotif = () => {
    if(Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
        if(permission === "granted") {
            new Notification(title, options);
        } else {
            return;
        }
        })
    } else {
        new Notification(title, options);
    }
    }

    // useEffect(() => {

    // })
    return fireNotif;
}


export default function App() {

    const triggerNotif = useNotification("Can I steal your kimch?", { body: "No" });

    return (
        <div className="App">
            <button onClick={triggerNotif}> Notification </button>
        </div>
    );
}