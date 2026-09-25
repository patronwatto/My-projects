import React from "react"

export default function Pad(prop) {
    const styles = {
            backgroundColor: prop.mode ? '#222222' : {prop.color} 
    }
    
    // style={{backgroundColor: prop.darkmode ? "#222222" : {pad.color} }} 
    const [onProp, setOnProb] = React.useState(prop.on)

    // function toggleClassName() {
    //     setOnProb(prev => !prev)
    // }    We do not want to use derived probs
            
    return(
        <button 
            style={styles}
            className={prop.on ? "on" : null}
            // onClick={toggleClassName}
            onClick={() => prop.toggle(prop.id)}
        >{prop.id}</button>
    )
}