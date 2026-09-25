import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(querySeleltor('#root'))
const elmt = createElement('h1', null, 'Hello from create Element')

console.log(elmt)
root.render( elmt )

