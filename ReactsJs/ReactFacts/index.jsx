import { createRoot } from 'react-dom/client'
import { Fragment } from 'react/jsx-runtime'
// import Footer from './components/Footer.jsx'
// import Main from './components/Main.jsx'
// import Header2 from './components/Header2.jsx'
import App from './App.jsx'


const root = createRoot(document.getElementById('root'))

function staticPage() {
    return (
        <div>
            <head>
                <img src="./images/2015-C-CLASS-SEDAN-CH03-D.jpg" alt="car pic" />
                <h3 className='logo-text'>Pawa. React</h3>
            </head>
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

root.render(
    <div>
        <staticPage />
    </div>
)

function Page() {
    return (
        <Fragment>
            <header>
                <img src="./images/2015-C-CLASS-SEDAN-CH03-D.jpg" alt="pic" />
            </header>
            <main>
                <h1>Reasons I'm excited to learn and teach React</h1>
                <ol>
                    <li>React is basically the most used front end web framework/library</li>
                    <li>It has a bigger ecosystem</li>
                    <li>The knowledge of react increases the likeliness of getting a job in the job market</li>
                    <li>Knowledge in React opens us up to other libraries and frameworks that might have similar fundamental concepts</li>
                </ol>
            </main>
            <footer>
                © 2026 PawaDevSecOps Douala Cameroon. All rights reserved
            </footer>
        </Fragment>         // we could as well use empty tags <> to denote a fragment
    )
}


root.render(
    <div>
        <staticPage />
        <Page />
    </div>
)

function Header() {
    return (
        <>
             <header>
                <img src="./images/2015-C-CLASS-SEDAN-CH03-D.jpg" alt="pic"  />
            </header>
        </>
    )
}


// function Main() {
//     return (
//             <main>
//                 <h1>Reasons I'm excited to learn and teach React</h1>
//                 <ol>
//                     <li>React is basically the most used front end web framework/library</li>
//                     <li>It has a bigger ecosystem</li>
//                     <li>The knowledge of react increases the likeliness of getting a job in the job market</li>
//                     <li>Knowledge in React opens us up to other libraries and frameworks that might have similar fundamental concepts</li>
//                 </ol>
//             </main>
//     )
// }

// function Footer() {
//     return (
//             <>
//                 © 2026 PawaDevSecOps Douala Cameroon. All rights reserved
//             </>
//             )
// }


root.render( <App />)


// CHallenge 
// Add a nav element, an ul, and 3 li elements. the 3 items should say: Pricing, about and Contact
// Add them under the image in the header element

// function Header2() {
//     return (
//         <>
//              <header>
//                 <img src="./images/2015-C-CLASS-SEDAN-CH03-D.jpg" alt="pic" />
//                 <nav>
//                     <ul className='nav-list'>
//                         <li className='nav-item'><a href="#">Pricing</a></li>
//                         <li className='nav-item'><a href="#">About</a></li>
//                         <li className='nav-item'><a href="#">Contact</a></li>
//                     </ul>
//                 </nav>
//             </header>
//         </>
//     )
// }



