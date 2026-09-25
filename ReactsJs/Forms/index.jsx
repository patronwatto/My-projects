import React from "react";
import { createRoot } from 'react-dom/client'
import { App } from "./App.jsx"

document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    submitViaAPI({
        firstName,
        lastName
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log('Submited')
}

--------------------------------------------------------------------------------------
// Using the onsubmit event handler option on the form

function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const fname = formData.get('firstName')
    const lname = formData.get('lastName')
    formEl.reset()
    // add an onSubmit attribute to the form element in the html file and asign 
    //  handleSubmit to the attribute/property.
} 



const root = createRoot(document.getElementById('root'))

root.render(
    <>
        <App />
    </>
)