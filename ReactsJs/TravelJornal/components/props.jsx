// import ReactDom from 'react-dom/client'
// ReactDom.createRoot(document.getElementById('root')).render(<PropsTest />)


export default PropsTest() {
    const firstNamw = 'Patron'
    const lastName = 'Watto'

    return <h1>Hello {firstName} {lastName} </h1>
}

----------------------------------------------------------------------------------------

export function CatsHardCoded(props) {
    return (
        <div className="contacts">
            <article className="contact-card">
                <img src={props.img} alt="pic of Mr. Whiskerson" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" alt="phone icon" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/email-icon.png" alt="email icon" />
                    <p>{props.email}</p>
                </div>
            </article>
        </div>
)}

export function CatsHardCoded2({img, name, phone, email}) {
    
        return(
            <div className="contacts">
            <article className="contact-card">
                <img src={img} alt="pic of Fluffykins" />
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" alt="phone icon" />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/email-icon.png" alt="email icon" />
                    <p>{email}</p>
                </div>
            </article>
            <article className="contact-card">
                <img src="./images/mr-whiskerson.png" alt="pic of Mr. Whiskerson" />
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" alt="phone icon" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="./images/email-icon.png" alt="email icon" />
                    <p>patronwatto@gmail.com</p>
                </div>
            </article>
            <article className="contact-card">
                <img src="./images/mr-whiskerson.png" alt="pic of Mr. Whiskerson" />
                <h3>Pumpkins</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" alt="phone icon" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="./images/email-icon.png" alt="email icon" />
                    <p>patronwatto@gmail.com</p>
                </div>
            </article>
        </div>
    )
}

export function Jokes({setup, punchline}){
    return (
        <>
        <h1>Jokes for the day</h1>
        <h2>joke: {setup} </h2>
        <h2>respond: {punchline} </h2>
        </>
        
    )
}