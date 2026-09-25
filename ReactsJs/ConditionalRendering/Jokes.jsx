import { useState } from "react"
import { JokesData } from "./JokesData.js"

export default Jokes(props) {
    const [isShown, setIsShown] = useState(false)
    function handleIsShow() {
        setIsShown(prev => !prev)
    }

    return(
        <div id={props.key}>
            {props.setup && <h3>{props.setup}</h3>}
            <button onClick={handleIsShow}>{isShown ? "Hide punchline" : "Show punchline" }</button>
            {isShown === true && <p>{props.punchline}</p>}
            <hr />
        </div>
    )
}

