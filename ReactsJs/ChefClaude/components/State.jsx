
// ---------- Differences between States and Props in React --------------------------

// In React Props refers to the properties/attributes that are being passed into a component
// in order for it to work correctly, similar to how a function recieves arguments during 
// the function call and parameters ducing the function setup. A component recieving props
// is not allowed to modify those props. (i.e they are "immutable").


// Whereas State refers to values that are managed by the component, similarly to variables
// declared inside a function. Anytime you have changing values that should be saved/displayed
// you'll likely be using states


// import { useState } from 'react'
    import React from 'react'

    export function TestStateMethod1() {

// the 1st Manner of implementing the useState method
        const result = React.useState('Heck Yes')

        return(
            <main>
                <h1 className='title'>Is State important to know ?</h1>
                <button className='Value'>{result[0]}</button>   
            </main>
        )
    }

    export function TestStateMethod2() {
//  The 2nd Manner of implementing useState

        // const [state, func] = React.useState("Most certainly")
            const [state, setstate] = React.useState('Most certainly')

        return(
            <main>
                <h1 className='title'>Is State important to know ?</h1>
                <button className='Value'
                onClick={handleClick}>{state}</button>   
            </main>
        )
    }

    function handleClick() {
        setstate("More than you can imagine")
    }
    
// ------------------------------------------------------------------------------------

// Practice useState



export function StatePractice1() {
    const count = 0
    const [changeCount, setchangeCount] = React.useState({count})
    
    function handleAddCount() {
                setchangeCount({count} + 1)
            }

    function handleSubCount() {
                setchangeCount({count} - 1)
            }

    return(
        <main className='container'>
            <h1>How many times will Bob say "state" in this section ?</h1>
            <div className="counter">
                <button className='minus' aria-label='Decrease count'
                onClick={handleSubCount}>-</button>
                <h2 className='count'>{changeCount}</h2>
                <button className='plus' aria-label='Increase count'
                onClick={handleAddCount}>+</button>
            </div>
        </main>
    )
}


export function GoingOutFunction(){
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function handleIsGoingOut() {
    //  setIsGoingOut(prev => !prev)
        setIsGoingOut(isGoingOut ? false : true)
    }

    return(
        <main>
            <h1 className='title'>Do I feel like going out tonight ?</h1>
            <button className='value'
            onClick={handleIsGoingOut}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}

export function FavoriteThing() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
    const allFavoriteThings = ["👌🙏", "🎅🦞","🦑🦈","🐬🐿️","🦨🐈‍⬛","🦦🤣","😎😋","😘🤩","🤑🐺","🦁🐯","🙉🙊","🙈🐵","🦝🐨","🐼🐻","🐻‍❄️🐻‍❄️","🦓🐸","🐴🫎","🦍🐒","🐕‍🦺🐩","🐈‍⬛🐈","🐅🐆","🐎🦬","🦌🦏","🐐","🐪🐫","🦙","🐑🐏","🐃🐄","🐂","⛷️","🤺","🫀🧠"]
    const thingElements = myFavoriteThings.map(things => <p key={things}>{things}</p>)
    function addFavThings() {
        setMyFavoriteThings(prev => [...prev, allFavoriteThings[prev.length]])
    }

    return (
        <main>
            <button onClick={addFavThings}>Add Item</button>
            <section aria-live='polite'>
                {thingElements}
            </section>
        </main>
    )
}




