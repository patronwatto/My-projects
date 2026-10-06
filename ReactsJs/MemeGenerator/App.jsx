import Main from "./components/main.jsx";
import Header from "./components/Header.jsx";


export default function App() {
    const topTextValue = document.getElementsByName("topText").value
    const bottomTextValue = document.getElementsByName("bottomText").value


    return (
        <>
            <Header />
            <Main 
            top={topText} 
            bottom={bottomText}
            src="http://i.imgflip.com/1bij.jpg" 
            />
        </>
    )
}