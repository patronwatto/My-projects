
// Intro to AI Engineering

import { dates } from '/utils/dates.js'

const tickersArr = []

const generateReportBtn = document.querySelector('.generate-report-btn')
generateReportBtn.addEventListener('click', fetchStockData)

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tickerInput = document.getElementById('ticker-input')
    if(tickerInput.value.length > 2){
        generateReportBtn.disabled = false 
        const newTickerStr = tickerInput.value
        tickersArr.push(newTickerStr.toUpperCase())
        tickerInput.value = ''
        renderTickers() 
    } else {
        const label = document.getElementsByTagName('label')[0]
        label.style.color = 'red'
        label.textContent = `You must add atleast one ticker. A ticker is a 3 letter or more code
         for a stock e.g TSLA for Tesla.`
    }
} )


async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none'
    loadingArea.style.display = 'flex'

    try {
        const stockData = await Promise.all(tickersArr.map( async (ticker) => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/
            ${dates.startDate}/${dates.endDate}?apikey=${process.env.POLYGON_API_KEY}`

            const response = await fetch(url)
            const data = await response.text()
            const status = await response.status

            if(status === 200) {
                apiMessage.innerText = 'creating report....'
                return data
            } else {
                loadingArea.innerText = 'There was an error fetching stock data.'
            }
        }))
        fetchReport(stockData.join(''))

    } catch (err) {
        loadingArea.innerText = 'There was an error fetching Stock Data.'
        console.error('error: ',err)
    }
}

async function fetchReport(data) {
    /** AI goes here */

    try {
        const openai = new OpenAI({
             dangerouslyAllowBrower: true
        })

        const messages1 = [
                { 
                    role: 'system', 
                    content: `You are a trading guru. Given data on share prices over the 
                            past 3 days, write a report of no more that 150words describing the stocks performance and recommending 
                            whether to buy, hold or sell` 

                //We can use a few-shots to train our model on how to responds e.g

                    // content: `You are a robotic doorman for an expensive hotel. When a 
                    //          customer greets you, respond to them in the most polite way.
                    //           Use examples provided between ### to set the style and tone 
                    //           of your response.` 
        
                },
                {   role: 'user', 
                    content: `${data}`

                // Example responses to illustrate few-Shot concepts to train models how to respond
                
                    // content: `Good day!
                    //          ### 
                    //          Good evening kind Sir. I do hope you are having the most tremendous day and looking
                    //          to an evening ot indulgence in our most delightful of restaurants.
                    //          ###
                    //          ###
                    //          Good morning Madame. I do hope you have the most fabulous stay with us in our outstandingly prestigious 
                    //          hotel. please do not hesitate to let me know how I can be of assistance to you.
                    //          ###
                    //          ###
                    //          Good day ladies and gentlemen. And isn't it a glorious day ? I do hope you have a fullfilled day 
                    //          day enjoying our hospitality.
                    //          ###
                    //          `
                }
                ]

        const response1 = await openai.chat.completions.create({
            model: 'gpt4',
            messages: messages1,
            // max_tokens: 25
            // temperature: 0.9         the standard temperature is 1 which is in the middle of its extreme values of 0 and 2
                                    //  temperatures of 0 is too cold which means it is less daring, more precise and more predictable
                                    //  while temperatures towards 2 is hot, more creative and at its extremes the answers are out of sense
                                    //  So temperatures of 0.9, 1 and 1.1 are the safest to explore
            
        })

        renderReport(response1.choices[0].message.content)


    } catch(err) {
        console.log('Error: ', err)
        loadingArea.innerText = 'Unable to Access AI. Please refresh and try again'
    }
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    const outputArea = document.querySelector('.output-panel')
    const report = document.createElement('p')
    outputArea.appendChild(report)
    report.textContent = output
    outputArea.style.display = 'flex'
}

// Learn about the polygon.io API 
// Also learn about the Open AI 

import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrower: true
})

console.log(openai.key)

const messages = [
    { 
        role: 'system', 
        content: 'You are a helpful general knowledge expert.'      
    },
    { 
        role: 'user', 
        content: 'Who invented the television ?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt4',
    // messages: [{'role': 'system', 'content': 'You are a helpful assistant.'},
    // {'role': 'user', 'content': 'Who won the world series in 2020 ?'}, 
    // {'role': 'assistant', 'content': 'The Los Angeles Dodgers won the World Series in 2020.'},
    // {'role': 'user', 'content': 'Where was it played ?'}]
    messages: messages
})

console.log(response.choices[0].message.content)


// Also learn about the OpenAI playground
// And about fine-tunning a model



// Creating/generating Images with the Dall-E API

import { OpenAI } from 'openai'

const outputImg = document.getElementById('output-img')

const openai = new OpenAI({
    dangerouslyAllowBrower: true
})

document.getElementById('submit-btn').addEventListener('click', () => {
    const prompt = document.getElementById('instruction-elmt').value
    generateImage(prompt)
})

async function generateImage(prompt) {
    const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt, 
        n: 1 ,      //n represents the number of images to generate and default value is 1
                    // for dall-e-2 models n can range from 1 to 9 images whereas in dall-e-3 n is always 1
        size: '1024x1024' ,    // default size is 1024x1024 but we can also have 1792x1024 and 1024x1792 for dall-e-3
                                // and 256x256, 512x512 and 1024x1024 for dall-e-2
        style: 'vivid',       //We only have 2 choices vivid or natural, default is vivid
        response_format: 'url'      //default val is url, but it has a short comming that the image can only stay visible for just 1 hour after which it dissapears 
                                    //we use the response_format to assign as our img scr
    
    // model: 'dall-e-2',
    // response_format: 'b64_json'
    // in the <img> element the src ="data:image/png;base46,${response.data[0].b64_json}"
    })
    console.log(response)
    outputImg.innerHTML = `<img scr='${response.data[0].url}' alt='The Image API failed' >`
}

// Hardcoded Prompt = 16th century woman with brown hair standing infront of a green vista
// with cloudy skies. She's looking at the viewer with a faint smile on her lips


// Intro to AI Safety

// We shall start by looking at the prompt injection risks

// Prompt injectio is a new attack technique that enables attackers to manipulate 
// the output of the LLM.

// Therefore we must take note that when ever we built AI agents with access to general tools 
// like e-mails and any other, we should expect misuse through prompt injections.

// SAFTETY BEST PRACTICES

async function aiSafetyBestPractices() {
    // Relevant for checking both prompts into AI and outputs from AI incase it was manipulated or tricked
    const completion = await openai.moderations.create({
        input: 'I hate you',
        user: 'user_123439458'   // user_id is important to monitor how users interact with ur app and know which user might want to misuse ur app

    })
    const {flagged, categories} = completion.results[0];
    console.log('flagged: ', flagged)
    console.log('Categoies: ', categories)

    if(flagged){
        renderWarning(categories)
    }
}

aiSafetyBestPractices()

function renderWarning(obj){
    console.log(`Your response has been flagged for the following reasons: ${obj.categories}`)
}