import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(req, res, baseDir){

   
    const pathToResource = path.join(
        baseDir,
        req.url === '/' ? 'layout.html' : req.url)

    try{
        const content = await fs.readFile(pathToResource)
        const ext = path.extname(pathToResource)
        // console.log(ext)
        sendResponse(res, 200, 'text/html', content)
        // res.statusCode = 200            
        // res.setHeader('Content-Type', ext)
        // res.end(content)    

    } catch(err) {
        console.log(err)
    }
    
}






