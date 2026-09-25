import { createRoot } from 'react-dom/client'

// create a root
const root = createRoot(document.getElementById('root'))


// render some markup to the root
root.render(<h1>Hello React</h1>)

// try to render an unordered list with 2 - 3 list items with why you are excited to learn react
root.render(<ul>
    <li>I think react puts the mastery of JS to practice</li>
    <li>React help me master JS even more</li>
    <li>React has an even broader ecosystem</li>
    </ul>)

// In the past we used to import 
// import { createElement } from 'react' see index2.jsx


// -------- React is composable. ie it can be made of many reusable components --------

function MyAwesomeNavbar() {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark' aria-label='Third navbar example'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>MyAwesomeNavbar</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                data-bs-target='#navbarsExample03' aria-controls='navbarsExample03'
                aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarsExample03'>
                    <ul className='navbar-nav me-auto mb-2 mb-sm-0'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href="#">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Link</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link disabled' aria-disabled='true'>Disabled</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href="#"
                            data-bs-toggle='dropdown' aria-expanded='false'>Dropdown</a>
                            <ul className='dropdown-menu'>
                                <li><a className='dropdown-item' href="#">Action</a></li>
                                <li><a className='dropdown-item' href="#">Another</a></li>
                                <li><a className='dropdown-item' href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form role='search'>
                        <input type="search" className='form-control' placeholder='search' aria-label='Search' />
                    </form>
                </div>
            </div>
        </nav>
    )
}

root.render(
    <div>
        <MyAwesomeNavbar />
        <mainContent />
    </div>
    )

// Create your very 1st custom react component! call it mainContent and have it return a simple h1 element
// that says "React is great!!!". Afterward render it in the line below MyAwesomeNavbar

function mainContent() {
    return (
        <h1>React is great !!!</h1>
    )
}

//--- React is Declarative, ie we only declare what we want and it uses its huge library to carry out the task -----

// Challenge - Reacreate the above line of code in vanila js by appending an h1 to our #root
// (without using innerHTML), 

const head1 = document.createElement('h1')
const root1 = document.getElementById('root')

head1.classList.add('header1')
head1.textContent = 'Imperative means you are doing it the manual way.'
root1.appendChild(head1)

// Whereas with Declarative coding, we just pass the JSX into the render function and React does the rest

root.render(
    <h1 className='header1'>React is Declarative.</h1> 
)

// -------------------------------------------------------------------------------------
// -----------------  Conditional Rendering --------------------------------------------

root.render(
    <>
        <App />
    </>
)







