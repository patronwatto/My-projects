// Import EventEmitter
import {EventEmitter} from 'node:events'

const customerDetails = {
    fullName: 'Meryl Sheep',
    email: 'baah@thedevilwearswool.com',
    phone: 12345678910
}

// Create the Emitter
const emailRequestEmitter = new EventEmitter()

// Define the listener function
function generateEmail(customer) {
    console.log(`Email was generated for ${customer.email}`)
}

// Register the listener 
emailRequestEmitter.on('emailRequest', generateEmail)
emailRequestEmitter.on('emailRequest', () => { console.log('Task Assigned')} )

// Emit the listener
emailRequestEmitter.emit('emailRequest', customerDetails)