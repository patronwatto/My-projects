import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import sanitizeHtml from 'sanitize-html'
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sightingAlertEmitter } from "../EventListeners/sightingEvents.js";
import { stories } from "../Data/stories.js";

export async function handleGet(res){
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {

    try {
        const parsedBody = await parseJSONBody(req)
        const sanitizedBody = sanitizeInput(parsedBody)
        await addNewSighting(sanitizedBody)
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))
        // Emit the listener
        sightingAlertEmitter.emit('sightingUpdate', sanitizedBody)

    } catch (err) {
        sendResponse(res, 400, 'application/json', JSON.stringify('Error: ', err))
    }

    

}

export async function handleNews(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')


    setInterval(() => {
        let randomIndex = Math.Floor(Math.random() * stories.length)
        res.write(
            `data: ${JSON.stringify({event: 'news-update', story: stories[randomIndex]})}\n\n`
        )

    }, 3000)
}