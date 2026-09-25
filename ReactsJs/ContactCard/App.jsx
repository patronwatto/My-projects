import React from "react"
import { avatar } from './images/user.png'
import Star from "./Star.jsx"
import Welcome from "./Welcome.jsx"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 (212) 555-1234',
        email: 'itsmyrealemail@example.com',
        isFavorite: false
    })


    
    function toggleFavorite() {
        setContact( prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img 
                    src={avatar} 
                    alt='User profile picture of John Doe'
                    className="avatar" 
                />
                <div className="info">
                   <Star 
                        click={toggleFavorite}
                       isFilled={contact.isFavorite}
                   />
                    <h2 className="name">{contact.firstName} {contact.lastName}</h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="email">{contact.email}</p>
                </div>
            </article>
            <Welcome />
        </main>
    )
}