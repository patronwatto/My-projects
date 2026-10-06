import React from "react";
import WindowsTracker from "./WindowsTracker.jsx";

export default function App() {

    const [show, setShow] = React.useState(true)

    }
    return (
        <main className="container">
            <button onClick={() => setShow(prev => !prev)}>Toggle WindowTracker</button>
            {show && <WindowsTracker />}

        </main>
    )
}