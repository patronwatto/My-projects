import Jokes from "./Jokes.jsx"
import { JokesData } from "./JokesData.js"

export default function App() {
    const jokeElements = Jokes.map( (joke) => {
        return (
            <Jokes 
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
    )})

    return(
        <div>
            {jokeElements}
        </div>
    )
}