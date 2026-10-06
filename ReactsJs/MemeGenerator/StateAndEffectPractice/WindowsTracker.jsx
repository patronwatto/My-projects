import React from "react";

export default function WindowsTracker() {
    const [widthFunction, setWidthFunction] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWindowWidth(){
            setWidthFunction(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return function(){
            window.removeEventListener("resize", watchWindowWidth)
        }
    },[])
    
    return (
        <h1>Window width: {widthFunction} </h1>
    )
}