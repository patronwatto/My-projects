import React from "react"
import ReactDOM from 'react-dom/client'


export default function App() {
    
    function signUp(formData) {
    // the event.preventDefault, formEl, formData and reset properties are not needed here 
    // bcuz we automatically have them with this method so... 
    // Only make sure to remove the POST method from the html element.
    const fname = formData.get('firstName')
    const lname = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')
    const desc = formData.get('description')
    const status = formData.get('statusradio')
    const dietary = formData.getAll('dietary')
    const favcolr = formData.get('favcolor')
    // const allData = Object.fromEntries(formData)     it is used to grab all the data 
    // at once as an object from any form but you can only get just 1 data from the 
    // group of checkboxes unless you particularly add them to it seperately. e.g

    // const dietaryData = formData.getAll('dietary')
    // const allData = {
    //                  ...Object.fromEntries(formData),
    //                  dietaryData
    //                      }
    
    },

    return (
        <section>
             <form action={signUp} onSubmit = "" method="POST" id="my-form">
                <label htmlFor="first-name">First Name: </label>
                <input type="text" id="first-name" name="firstName" class="input" />
                <br />
                <label htmlFor="last-name">Last Name: </label>
                <input type="text" id="last-name" name="lastName" class="input" />
                <br>
                <label htmlFor="ename">Email: </label>
                <input type="email" id="email" name="email" class="input" />
                <br>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" class="input" />
                <br>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={} cols={}></textarea>

                <fieldset>
                    <legend>Status</legend>
                    <label htmlFor="admin">
                    <input type="radio" name="statusradio" value="admin"/>
                    Admin </label>
                    <label htmlFor="user">
                    <input type="radio" name="statusradio" defaultChecked={true} value='user'/>
                     User </label>
                    <label htmlFor="customer">
                    <input type="radio" name="statusradio" value="customer" />
                     Customer </label>
                </fieldset>

                 <fieldset>
                    <legend>Dietery restrictions</legend>
                    <label htmlFor="admin">
                    <input type="checkbox" name="dietary" value="plantain"/>
                    Plantain </label>
                    <label htmlFor="user">
                    <input type="checkbox" name="dietary" defaultChecked={true} value='casava'/>
                    Casava </label>
                    <label htmlFor="customer">
                    <input type="checkbox" name="dietary" value="maggi-cube" />
                    Maggi cube </label>
                </fieldset>

                <label htmlFor="favcolor">What is your favorite color</label>
                <select name="favcolor" id="favcolor" defaultValue="" >
                    <option value="" disabled="disabled" >-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="brown">Brown</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                </select>
                <input type="submit" value="Submit">
            </form>
        </section>
    ),
}

{/* ================================================================================= */}



{/* ------------------------ Conditional Rendering ----------------------------------- */}










