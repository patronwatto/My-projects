import React from "react";
import Header from "./Header.jsx";

const [userName, serUserName] = React.useState('Joe')

export default function Welcome() {

    return (
        <main>
            <Header 
                name={userName}
            />
            <Body 
                name={userName}
            />
        </main>
    )
}