import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
import { handleNews } from './handlers/routeHandlers.js'
// we could also import these previous 3 from the same location as
// import { handleGet, handlePost, handleNews } from './handlers/routeHandlers.js'


const PORT = 8000

const __dirname = import.meta.dirname
console.log(await getData())

const server = http.createServer( async(req, res) => {
    if (req.url === '/api') {
        if(req.method === 'GET') {
            return await handleGet(res)
        }
        if (req.method === 'POST'){
            handlePost(req, res)
        }

    } else if (req.url === '/api/news') {
        return await handleNews(req, res)
        
    } else if(!req.url.startsWith('/api')){
        return await serveStatic(req, res,__dirname)
    }
})

server.listen(PORT, () => {
    console.log(`Server is now running on port: ${PORT}`)
})

// We have to install the XSS package for sanitizing inputs in forms 
// in the terminal type npm install sanitize-html
