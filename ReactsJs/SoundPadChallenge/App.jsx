import pads from './Pads.jsx'
import React from 'react'
import Pad from './Pad.jsx'


export default function App(prop) {
    const [padArray,setPadArray] = React.useState(pads) 
  function Toggle(id) {
        setPadArray(prevPadArray => prevPadArray.map(
             item => { return (
                item.id === id ? {...item, on: !item.on} : item 
            )}
        ) )
  }

    const padBtns = padArray.map(pad => {
        return(
            <Pad key={pad.id} 
                id={prop.id}
                color={pad.color}                              
                mode={prop.darkmode}
                on={pad.on}
                toggle={Toggle}
            />   
        )
    })


    return(
        <main>
            <div className='pad-container'>
                {padBtns}
            </div>
        </main>
    )
}