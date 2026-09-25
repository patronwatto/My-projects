
// Learn how to build a web server with js

import http from 'node:http'
import { getDataFromDB } from './db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParam } from './utils/getDataByPathParam.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000
// const destinations = await getDataFromDB
// const request = {
//     url : 'https:/localhost:8000/api',
//     method: 'GET',
//     headers:  '',
//     data: JSON.stringify(destinations[0])
// }


const server = http.createServer(async (req, res) => {
    // const {url, method, headers, data } = req

    const destinations = await getDataFromDB()

    const urlObj = new URL( req.url, `https://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    
    // if (req.url === '/api' && req.method === 'GET') {
      if (urlObj.pathname === '/api' && req.method === 'GET') {

        
        let filteredData = getDataByQueryParams(destinations, queryObj)


        sendJSONResponse(res, 200, filteredData)    //making the code Dry
            // res.setHeader('Content-Type', 'application/json')
            // res.end(JSON.stringify(destinations))
            // res.statusCode = 200
    } else if( req.url.startsWith('/api/continent') && req.method === 'GET'){

        const endpoint = req.url.split('/').pop()

        // const filteredData = destinations.filter((des) => {
        //     return des.continent.toLowerCase() === endpoint.toLowerCase() 
        // })

        const filteredData = getDataByPathParam(destinations,'continent', endpoint)

        // res.setHeader('Content-Type', 'application/json')
        // res.end(JSON.stringify(filteredData))
        // res.statusCode = 200
        sendJSONResponse(res, 200, filteredData)

    } else if ( req.url.startsWith('/api/country') && req.method === 'GET') {
        const endpoint = req.url.split('/').pop()

        // const filteredData = destinations.filter((des) => {
        //     return des.country.toLowerCase() === endpoint.toLowerCase() 
        // })

        const filteredData = getDataByPathParam(destinations,'country', endpoint)
        sendJSONResponse(res, 200, filteredData)

    } else {

        // res.setHeader('Content-Type', 'application/json')
        // res.statusCode = 404
        // res.end(JSON.stringify({error: 'not found', message: 'The requested route does not exist'}))
        sendJSONResponse(res, 404, {error: 'not found', message: 'The requested route does not exist'})
    }
    
    // res.write('This is some Data \n') is also used to send data in an http request but with this method we can send multiple data each in its own res.write() method and at the end we conclude the request with an res.end() method 
    res.end('Hello from the Server')       // The end() method sends data over http and then ends the respense
    
})

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
    // console.log(req.url)
})
