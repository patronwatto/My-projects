import Header from "./components/Header"
import Main from "./components/Main.jsx"
import { Main2 } from "./components/Main.jsx"
import { CatsHardCoded } from "./components/props.jsx"
import { CatsHardCoded2 } from "./components/props.jsx"
import { Jokes } from "./components/props.jsx"
import jokesData from "./utils/jokes.js"
import { TravelData } from "./arrayMaps.js"

const EntryTravelData = TravelData.map(data => `
    <Main2 
        key={data.id}
        src={data.img.src}  
        alt={data.img.alt}  
        title={data.title}
        cntry={data.country}  
        gml={data.googleMapsLink}   
        dates={data.dates}
        txt={data.text}
    />
    `
)

// WE could still write the EntryTravelData Array like this: 

// const EntryTravelData = TravelData.map(data => return(
//      <Main2 
            // key={data.id}
            // data={data}      this line is used when the props has the same keys as
                            //  the key-value pair of the object brought in as parameter 
                            //  of the mapping function
//       Or
//              {...data}       for the same purpose
//       />
//       ))


export default App() {
 return (
        <>
            <Header />
            <Main />
            {EntryTravelData}

            // Adding custom props as data in the custom component call
            <CatsHardCoded 
                img='./images/mr-whiskerson.png'
                name='Mr Whiskerson'
                phone='(212) 555-1234'
                email='mr.whiskaz@catnap.meow'
            />
            <CatsHardCoded 
                img='./images/mr-fluffykins.png'
                name='fluffykins'
                phone='(212) 555-1234'
                email='fluff@me.com'
            />
            <CatsHardCoded2 
                img='./images/felix.png'
                name='Felix'
                phone='(212) 555-1234'
                email='thecat@hotmail.com'
            /> 

        <main>
            <joke 
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />
            <joke 
                setup="How did the hacker escape the police ?"
                punchline="He just ransomeware!"
            />
            <joke 
                setup="Why don't pirates travel on mountain roads ?"
                punchline="Scurvy"
            />
            <joke 
                setup="why do bees stay in the hive in the winter ?"
                punchline="Swarm"
            />
            <joke 
                setup="What's the best thing about Switzerland ?"
                punchline="I don't know, but the flag is a big plus!"
            />
        </main>
        </>
 )   
}