import React from "react"

export default function Main(props) {
    
    const [memeInfo, setMemeInfo] = React.useState({
        top: {props.top},
        bottom: {props.bottom},
        img: {props.url}
    })

    // Controlled Components
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMemeInfo(prevMem => ({
            ...prevMem,
            [name]: value
        }))
    }

    async function getMemeImage() {
        // fetch("https://swapi.dev/api/people/1")
            // .then(res => res.json())
            // .then(data => console.log(data))

        // try {
        //     const getImgResponse = await fetch('https://example.com');
            
        //     if (!getImgResponse.ok) {
        //     throw new Error(`HTTP error! Status: ${getImgResponse.status}`);
        //     }
            
        //     const getImgData = await getImgResponse.json();

        //     setMemeImg(getImgData)  
        // } catch (error) {
        //     console.error('Fetch failed:', error);
        // }

        // const [count, setCount] = React.useState(0)

        React.useEffect(() => {
            console.log("Effect function ran")
            fetch(`https://api.imgflip.com/get-memes`)
                .then(res => res.json())
                .then(data => setMemeImg(data.data.memes))
        }, [])
        
    }

    const [memeImg, setMemeImg] = React.useState([])

    function randomImg() {
        const number = Math.floor(Math.random() * memeImg.length)
        const newMems = memeImg[number].url
        setMemeInfo(prev => ({
            ...prev,
            Img: newMems
        }))
    }
 
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeInfo.top}
                        />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeInfo.bottom}
                        />
                </label>
                <button onClick={randomImg}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={memeInfo.img} alt="" />
                <span className="top">{memeInfo.top}</span>
                <span className="bottom">{memeInfo.bottom}</span>
            </div>
        </main>
    )
}