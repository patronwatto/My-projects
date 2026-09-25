import { serveStatic } from './script.js'
import http from 'node:http'
import path from 'node:path'
import { sendResponse } from './sendResponse.js'

// import fs from 'node:fs/promises'

//import.meta         //this is an object specific to the modular JS environment which 
                    // provides metadata about the current module.

// The FS Module Uses: 
// Read files with .readFile()
// Create files with .writeFile()
// Update files with .appendFile()
// Delete file with .unlink()
// Rename file with .rename()klk                    



const __dirname = import.meta.dirname
const filename = import.meta.filename          
const PORT = 8000


 
const server = http.createServer( async (req, res) => {

    // const pathToResource = path.join(__dirname,'layout.html')
    const relPathToCssResource = path.join('style.css')
    await serveStatic(req, res, __dirname)

    

    // const htmlContent = await fs.readFile(pathToResource, 'utf8')
    
   
   

    // Let's try to import all these html from their respective files and see
        // const htmlLayout = `
        //                     <!DOCTYPE html>
        //                     <html lang="en">
        //                     <head>
        //                         <meta charset="UTF-8">
        //                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //                         <title>from-the-other-Side</title>
        //                         <link rel="stylesheet" href="style.css">
        //                     </head>
        //                     <body>`

        const mainContent = `            
                            <div class="main-container" id="main-container">
                                <h1>We Intent to render from the server</h1>
                            </div>`

        // const ending = `
        //                     <script src="server.js"></script>
        //                 </body>
        //                 </html>`
        // const style = `<style> 
        //                     * {
        //                         margin: 0;
        //                         padding: 0;
        //                         box-sizing: border-box;
                                
        //                     }

        //                     body {
        //                         min-height: 100dvh;
        //                         text-align: center;
        //                         padding: 5rem;
        //                         background: #e2efff;
        //                     }

        //                     .main-container {
        //                         background: white;
        //                         width: 70%;
        //                         height: 400px;
        //                         margin: auto;
        //                         border-radius: 2rem;
        //                         box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.2);
        //                     }
        //                 </style>`

        // res.statusCode = 200            
        // res.setHeader('Content-Type', 'text/html')
                // the 2 above can replaced by:
                // res.writeHead(200, {'Content-Type': 'text/html'})

        // res.write(htmlLayout)
        // res.write(mainContent)
        // res.write(ending)
        // res.write(style)
        // res.end(`All these content are from the server running on port: ${PORT}`)

        // res.end(htmlContent)
          

})


server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
        
})

// server.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}`)
//     // console.log(req.url)
// })
