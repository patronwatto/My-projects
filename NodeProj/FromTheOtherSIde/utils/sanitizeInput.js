import sanitizeHtml from 'sanitize-html'

export function sanitizeInput(data) {
    const sanitizedData = {}

    for(const [key, value] of Object.entries(data)){
        if( typeof value === 'string') {
            sanitizedData[key] = sanitizeHtml(value, {allowedTags: ['b'], allowedAttributes: {}})
        } else {
            sanitizedData[key] = value
        }
    } 

    return sanitizedData
}


        // sanitizeHtml(parsedData.uuid, {allowedTags: [], allowedAttributes: {}})
        // sanitizeHtml(parsedData.location, {allowedTags: [], allowedAttributes: {}})
        // sanitizeHtml(parsedData.title, {allowedTags: [], allowedAttributes: {}})
        // sanitizeHtml(parsedData.text, {allowedTags: ['B', 'Br', 'u'], allowedAttributes: {}})