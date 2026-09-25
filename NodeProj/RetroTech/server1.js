import path from 'node:path'
import http from 'node:http'
import fs from 'node:fs/promises'
import { serveStatic } from './script.js'
import { getContentType } from './utils/getContentType.js'

const PORT = 8000

const __dirname = import.meta.dirname
console.log(__dirname)

const server = http.createServer( async (req, res) => {

    if(req.url === '/sub' && req.method === 'POST'){
        let body = ''

        for await (const chunk of req) {
            body += chunk
        }

        try{
            const emailObj = JSON.parse(body)
            res.statusCode = 201
            res.setHeader('Content-Type', 'Application/json')
            res.end(JSON.stringify(emailObj))

        } catch (err) {
            console.log('Invalid JSON, ', err)
        }
        return 
    }

    const pathToResource = path.join(
        __dirname, 
        req.url === '/' ? 'layout.html' : req.url )

    const content = await fs.readFile(pathToResource)

    const ext = path.extname(pathToResource)
    const contentType = getContentType(ext)
    console.log(`This is What I want you to see: ${ext}`)

    // await serveStatic(req, res, __dirname)
        res.statusCode = 200
        res.setHeader('Content_Type', contentType)
        res.end(content)

})


server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})