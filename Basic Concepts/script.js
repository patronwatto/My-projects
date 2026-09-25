const { accepts } = require("express/lib/request")

const mainContainer = document.getElementById('main-container')
const priceEl = document.getElementById('price')
const item1 = document.querySelector('input[name="item"]:checked')
const form = document.getElementById('item-form') 
// let message = ''
let Arr = []
const exerciseTimeMin = 70


// --------------------------------------------------------------------------------

// Using the IfElse statement to do a selection
// if(exerciseTimeMin < 30){
//     message = 'You need more exercise'
// } else {
//     message = 'Doing good'
// }
// console.log(message)



// using ternary operators todo selection
// particularly important when you want to change the value of a variable provided a 
// certain criteria/condition is met

const ternaryMessage = exerciseTimeMin < 30 ? "You need to do more exercises, try again harder" : exerciseTimeMin < 60 ? "Doing great" : "Excellent"
console.log(ternaryMessage)

// Muscle Exercise on ternary operator
const playerGuess = 4
const correctAnswer = 6

const message = playerGuess === correctAnswer ? "You guessed the right answer"
                : "Sorry, You guessed wrong !!!"

console.log(message)


// --------------------------------------------------------------------------------


// Using the switch statement to perform multiple selection posssibilities


function selectItem(item){
    let price = 0

    switch(item){
        case 'Coffee':
            price = 2
            break
        case 'Sandwiches':
            price = 5
            break
        case 'Salad':
            price = 4
            break
        case 'Lemon Cake' :
            price = 3
            break
    }

    return `Your selected ${item}, cost ${price}FCFA. `
}


    form.addEventListener("change", function(e){
    // const itemValue = item1.value

    if (e.target && e.target.name === 'item'){
        // console.log(itemValue)
        priceEl.textContent = selectItem(e.target.value)
        clearTimeout(questionTimer)
    }
    
    
})

// ------------------------------------------------------------------------------------


// Object destructuring: which is the act of getting property values off an object

const favoriveFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    start: "Tom Cruise",
    director: "Tony Scott" 
}

// this would be the normal way when the object has no private or protected access modifiers
// const title = favoriveFilm.title
// const year = favoriveFilm.year
// const genre = favoriveFilm.genre
// const start = favoriveFilm.start
// const director = favoriveFilm.director

// console.log(`My favorite film is ${title} starring ${start}. It's an ${genre} movie that was directed by ${director} in the year: ${year}.`)


// Using object destructuring to perform almost the same tasks with the same kinda object
const {title, year, genre, start, director} = favoriveFilm

Arr.push(`My favorite film is ${title} starring ${start}. It's an ${genre} movie that was directed by ${director} in the year: ${year}.`)

// Muscle exercise 

const dreamHoliday = {
    destination: "Austin-Texas",
    activity: "Visite attractive touristic sites",
    accomodation: "numerous hotels",
    companion: "Monique my love, my children, and relatives",
    purpose: "relaxation and refreshment",
    period: "1 whole month"
}

const {destination, activity, accomodation, companion, purpose, period} = dreamHoliday

Arr.push(`I would love to ${activity} in ${destination} and live in ${accomodation} accompanied by ${companion} for a period of ${period} just for the purpose of ${purpose}.`)

const random = Math.floor(Math.random()*Arr.length)
priceEl.textContent = Arr[random]

// ---------------------------------------------------------------------

// Using setTimeout with params for control operations/Events for a specific period

function displayTrafficLight(light) {
    priceEl.textContent = light
}

// setTimeout(displayTrafficLight, 8000,'🟡' )
// setTimeout(displayTrafficLight, 5000,'🟠' )
// setTimeout(displayTrafficLight, 2000,'🟢' )
// displayTrafficLight('🔴')

// Muscle exercise 


function logAnswer(answer, points){
    priceEl.textContent = `The answer is ${answer} of course! If you got that right, give yourself ${points} points.`
}
let message2 = 'What is the Capital of Peru ?'

priceEl.textContent = message2
const questionTimer = setTimeout(logAnswer, 5000, "Lima", 10)

// Muscle exo 2

// getting the starting timestamp
const startTime = performance.now()

setTimeout(() => {
    // Get the ending timestamp
    const end = performance.now()
    priceEl.textContent = `Execution time: ${end - startTime} miliseconds`
}, 1000)

for (let i = 0; i< 1000000; i++){
    let answer = i * 2000000/67.8 *(45.7/3.2)
}

// ---------------------------------------------------------------------------------------------



// Using imports and exports

    import { travelDestinationsArr as destinations, travelDestinationsArr} from "./data.js"
    console.log(destinations)

// Import Export: default 
    import getMatchingTripsArr from "./searchFunction.js"
    console.log(getMatchingTripsArr(travelDestinationsArr, 'exotic'));

// ------------------------------------------------------------------------------------


// Intro to Constructors
// Inbuilt Constructors

// The Date() constructor
const datesnapshot = new Date()
console.log(typeof datesnapshot)
console.log(`Copyright © ${datesnapshot.getFullYear()} all rights reserved. `)

// The Error() constructor
function checkUserName(userName){
    if(userName){
        console.log(userName)
    } else{
         console.log( new Error("No username given, Please provide a user name to proceed"))
        // We can as well use the throw keywork to display the error in the console 

        // throw new Error("No username given, Please provide a user name")
        // We must note that with the throw keyword it displays the error and breaks the 
        // further execution on code. any other code written after that statement is not executed
        }
    }
checkUserName('🟠🟡(❁´◡`❁)(❁´◡`❁)')
checkUserName()

// Other built-in constructors for dataTypes are: 
// Number(), String(), Array(), Object(), Boolean(). example
const person = new Object()

person.name = "Derek"

console.log(person)

// -----------------------------------------------------------------------------



// Hoisting
function getWeather(){
    return "Today's weather is warm and sunny"
}

console.log(getWeather())

console.log(getNews())

function getNews(){
    return "A new swimming pool has opened in the town center..."
}

    // console.log(trafficInfo)

    let trafficInfo = "All roads are busy right now"

// import { render } from "express/lib/response" 

// if (render){
//     console.log('All is working well')
// } else console.log(new Error())



// Hoisting is a phenomenon/situation where variables and functions declaration are moved 
// to the top of their containing scope during the compilation phase, before code execution.


// Mussle Exo challenge

import { getStockData } from "./data.js"

// function getStockData(){
//      return {
//         name: 'QtechAI',
//         Symbol: 'QTA',
//         price: (Math.random()*3).toFixed(2),
//         time: new Date().toLocaleDateString()
//     }
// }


    setInterval(function(){
        const stockData = getStockData()
        renderStockTicker(stockData)
    }, 1500)

let referencePrice = 0

function renderStockTicker(stockData){
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price1')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const {name, symbol, price, time} = stockData

    stockDisplayName.textContent = name
    stockDisplaySymbol.textContent = symbol
    stockDisplayTime.textContent = time
    stockDisplayPrice.textContent = price
    if(price > referencePrice) {
    
        stockDisplayPriceIcon.textContent = '🔺'
        referencePrice = price
    } else if (price === referencePrice) {
        stockDisplayPriceIcon.textContent = '▶'
        referencePrice = price
    } else {
        stockDisplayPriceIcon.textContent = '🔻'
        referencePrice = price
    } 
}

// -------------------------------------------------------------------------
 

 
// Function Expressions 
// Arrow functions 


// Traditional way
const getSpentAlert = function(amount){
    return `Warning! you just spent €${amount}!`
}

// Arrow function way
const getSpentAlert1 = (amount) => {
        return `Warning! you just spent €${amount}!`
    }

console.log(getSpentAlert1(150))


// Another one again

const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map((distance) => {
    return Math.round(distance*1.6)
})

console.log(distanceTraveledKm)

// try to lookup on the reduce method on arrays and also the reason why imports are no working
// also learn what the map function for arrays are used for and how to use it


// The Rest Parameter used for catching the rest of the arguments

function setPermissionLevel( permissionlevel, name1, name2, name3) {
    console.log(`${name1} now has ${permissionlevel} level access.`)
    console.log(`${name2} now has ${permissionlevel} level access.`)
    console.log(`${name3} now has ${permissionlevel} level access.`)

}

console.log(setPermissionLevel('admin', 'Patron', 'Watto', 'Derek'))

// In the case where we call the setPermissionLevel fuction and pass less arguments than it
// actually requires or pass more parameters than it actually requires it is going to flag
// out a problem. that is why we use the Rest parameter to solve such a problem

// the function now defined with a rest parameter will look like: 

function setPermissionLevel1 (permissionlevel, ...names){
    names.forEach((name) => console.log(`${name} now has ${permissionlevel} level access granted`))
}

console.log(setPermissionLevel1('admin', 'Derek', 'Waindah', 'Patron', 'Watto'))

// Rest Parameter Challenge

function getLabelsHtml( ...objects){
    const text = 'Thank you for all your hardwork throughout this year! 🫂👍🤝🙏'
    const sender = 'PatronWatto🎅'
    let html = ''
    objects.forEach((object) => {
        html += `<div class='label-card'>
        <p> Dear ${object.name} </p>
        <p> ${text} </p>
        <p> Best wishes </p>
        <p> From ${sender} to Beloved ${object.name} </p>
        </div> `
})

    return html
}

const card = document.getElementById('label-card')
card.innerHTML = ''
card.innerHTML += getLabelsHtml({name: 'Derek'},{name: 'Watto'},{name: 'Patron'},{name: 'Waindah'},)


// The proposed solution for the problem by my teachers
// using the map array function to realize the same task 
function getLabelsHtml1 (text, sender, ...staffObjs) {
    const labelsHtml = staffObjs.map(staffObj => 
        `<div class='label-card'>
        <p> Dear ${staffObj.name} </p>
        <p> ${text} </p>
        <p> Best wishes </p>
        <p> From ${sender} to Beloved ${staffObj.name} </p>
        </div> `
    )
    // you could link .join('') at the end of the .map function to avoid the huge seperation
    // between adjacent elements as displayed on the page.

    // the map array function automatically returns an array so one could remove the 
    // labelsHtml constant and return the entire staffObjs.map function e.g 
    // return staffObjs.map( (staffObj) => {..... and so on ...}) 
    // then cancel the other return statement at the end of the function
    // 

    return labelsHtml
}

const text1 = 'Thank you for all your hardwork throughout this year! 🫂👍🤝🙏'
const sender1 = 'PatronWatto🎅'

card.innerHTML += getLabelsHtml1(text1, sender1, {name: 'Derek'},{name: 'Watto'},{name: 'Patron'},{name: 'Waindah'},)



// Callback Functions 


// Super Challenge

const card1 = document.getElementById('label-card1')
card1.innerHTML = ''

import { getRealEstateData } from "./data.js"

card1.innerHTML += getLabelsHtml2(getRealEstateData[0],getRealEstateData[1],getRealEstateData[2],getRealEstateData[3])

function getLabelsHtml2( ...objects){
    // const image = document.createElement(img)
    // img.src = 
    // const sender = 'PatronWatto🎅'
    let html = ''
    objects.forEach((object) => {
        html += `<div class='label-card1'>
            <img src='${object.imgname}' alt='house image'>
            <div class='text-section'>
                <h2 class='title'><span>${object.town}</span>, <span>${object.city}</span> </h2>
                <h3>£${object.price} </h3>
                <p class='des'>${object.description} </p>
                <h3> ${object.size}m²</h3>
            </div>
        </div> `
})

    return html
}

import { propertyForSaleArr } from "./data.js"
import { placeHolder } from "./data.js"
import { contentType } from "express/lib/response.js"

// console.log(propertyForSaleArr)

function getPropertyHtml(propertyArr = [placeHolder]) {
    return propertyArr.map((property) => {
        const {town, price, description, roomsM2, imgname} = property
        const totalRoomSize = roomsM2.reduce((total, current) => total + current)
        return `
        <section class='label-card1'>
            <img src='${imgname}' alt='house image'>
            <div class='text-section'>
                <h2 class='title'><span>${town}</span> </h2>
                <h3>£${price} </h3>
                <p class='des'>${description} </p>
                <h3> ${totalRoomSize}m&sup2;</h3>
            </div>
        </section> `
    }).join('')
}

card1.innerHTML += getPropertyHtml(propertyForSaleArr)
card1.innerHTML += getPropertyHtml()


// ----------------------------------------------------------------------------------



// Assyncronous JS and JSON

// Intro to APIs sending a web request using Fetch().then()

fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imgEl = document.createElement('img')
        imgEl.scr = data.message
        imgEl.alt = 'random dog picture'
        document.getElementById('img-container').appendChild(imgEl)
    })
    .catch( err => console.log(err))
    .finally(() => console.log('The operation completed!'))

// Making a web request using the async/await 

const BASE_URL = 'https://bored-api.appbrewery.com/random'
const Base_Url = 'https://apis.scrimba.com/bored/api/'
const End_Point = 'activity'

async function getApi() {
   try{
    const response1 = await fetch(`${Base_Url}${End_Point}`)
    if(!response1.ok){
        throw new Error('There was a problem with the API query')
    }
    const data = await response1.json()
   } catch(err) { console.log(err)} finally {
    console.log('The operation completed!')
   }
}

console.log(getApi())


// The JSON placeholder API

const Base_Url1 = 'https://apis.scrimba.com/jsonplaceholder/'
const End_Point1 = 'posts'

 try{
    const response2 = await fetch(`${Base_Url1}${End_Point1}`)
    if(!response2.ok){
        throw new Error('There was a problem with the API query')
    }
    const data1 = await response2.json()
    console.log(data1)

   } catch(err) { console.log(err)

   } finally {
    console.log('The operation completed!')
   }


//    Other methods we can use. We use the fetch() method to perform a get request
// we also have the:
// POST for sending data from a form, 
// PUT for updating request to a server, 
// DELETE for deleting data from a server or a delete request, 
// PATCH also updates info in a server using an update request sent to the server and 
// OPTIONS 
// 
// 
// What we must note is that all these different requests can be made using a second 
// parameter (method= '') added inside the fetch request and different endpoints depending
// on the specification of the API in question. The default method for the fetch() request
// is a GET method attribute <<method='GET'>> that is why we usually dont specify it but
// if we intend to perform a different kind of request like the DELETE, PUT, PATCH
// and so on we need to specify it in the method attribute inside the fetch() function
// Accompanied with this is the correct endpoint for such an operation as specified by the 
// desired API documentation.
// 
// For our json placeholder api, the necessary endpoints to perform these requests are:
// GET      'posts'
// GET      'posts/1'
// GET      'posts/1/comments'
// GET      'comments?postid=1'
// POST     'posts'
// PuT     'posts/1'
// PATCH     'posts/1'
// DELETE     'posts/1'
// 
// 


// API request the BODY 
// when sending data to a server for instance a PUT or POST request, were gonna need 
// something (a body) to hold that data

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
    }),
})

const Base_Url2 = 'https://apis.scrimba.com/jsonplaceholder/'
const End_Point2 = 'posts'

 try{
    const response3 = await fetch(`${Base_Url2}${End_Point2}`,{
        method: 'POST',
        body: JSON.stringify({
            title: 'Holiday Nightmares',
            body: 'When I was kidnapped in Scotland...',
            userId: 4
            }),
        header: {
            contentType: 'application/json'
        }
    } )

    if(!response3.ok){
        throw new Error('There was a problem with the API query')
    }

    const data2 = await response3.json()
    console.log(data2)

   } catch(err) { console.log(err)

   } finally {
    console.log('The operation completed!')
   }


//    Headers 
// Headers contain some extra info about our request that we send with our request they could be meta data
// subject titles, authentication, data encryption, datatype and so on....



// The Promise Constructor
// Building Our own Async Actions


const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5 
    if(success){
        resolve('Operation successful')
    } else {
        reject('Operation failledn')
    }
})

promise.then(response => console.log(response))

// We could also do it by using the try catch response e.g

// try {
//     const response = await promise 
//      console.log(response)
// } catch(err) {
//     console.log(err)
// }

// 
// Promise Constructor Challenge

function preLoadImg (url) {
    return new Promise( (resolve, reject) => {
        
        const img = new Image()
        img.scr = url
        img.alt = 'a beautiful scene'
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject('Image has not loaded'))    

    })
}

try {
    const loadImg = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenicl.jpg')
    console.log(loadImg)
    document.getElementById('img-container').appendChild(loadImg)
} catch(err){
    console.log(err)
}

// 
// 
// Using Promises to escape call back hell
// Call back hell example

function uploadFile(callback) {
    console.log('step 1: Uploading file....')
    setTimeout(() => {
        callback()  // call the next step after 1 second
    }, 1000)
}

function processFile(callback) {
    console.log('step 2: Processing file....')
    setTimeout(() => {
        callback()  // call the next step after 1 second
    }, 1000)
}
function notifyUser(callback) {
    console.log('step 3: Notifying User....')
    setTimeout(() => {
        callback()  // call the next step after 1 second
    }, 1000)
}

uploadFile(() => {
    processFile(() => {
        notifyUser(() => console.log('All steps completed!'))
    })
})



// Using Promises to escape we get:

function uploadFile1() {
    return new Promise( (resolve, reject) => {
    console.log('step 1: Uploading file....')
    setTimeout(() => {
        resolve()  // call the next step after 1 second
    }, 1000)
})
}

function processFile1() {
    return new Promise((resolve, reject) => {
        console.log('step 2: Processing file....')
        setTimeout(() => {
        resolve()  // call the next step after 1 second
    }, 1000)})
}

function notifyUser1() {
    return new Promise((resolve, reject) => {
        console.log('step 3: Notifying User....')
        setTimeout(() => {
                     resolve()  // call the next step after 1 second
                        }, 1000)
                    })
}

try {
    await uploadFile1()
    await processFile1()
    await notifyUser1()
    console.log('All steps completed')

} catch(err){
    console.log(err)
}

// Using the Promise.all 


try {
    const promise1 = promise()
    const promise2 = promise()
    const promise3 = promise()
    const promise4 = promise()

    const promises = await Promise.all([promise1, promise2, promise3, promise4])
    console.log(promises)
} catch(err) {
    console.log(err)
}


function getImagePromise (url) {
    return new Promise( (resolve, reject) => {
       setTimeout(() => { 
        const img = new Image()
        img.scr = url
        img.alt = 'Scenic image'
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))    
        }, 500)
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preloadImages(imageUrlsArr){
    const imageContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')
    const image1 = getImagePromise(imageUrlsArr[0])
    const image2 = getImagePromise(imageUrlsArr[1])
    const image3 = getImagePromise(imageUrlsArr[2])

    // or it could still be done usign the code below

    // const image123 = imageUrlsArr.map((url) => getImagePromise(url))

    const loadImages = Promise.all([image1,image2,image3])
    uploadContainer.appendChild(loadImages)
    return loadImages
}


try {
    const loadedImages = await preLoadImages(images)
    console.log(loadedImages)
    console.log('All images loaded successfully')
    document.getElementById('upload-container').classList.add('hidden')

        // it could still be done by using 
        // document.getElementById('upload-container').style.display = 'none'

    loadedImages.forEach((img) => document.getElementById('img-container').appendChild(img))

} catch(err){
    console.log(err)
}

