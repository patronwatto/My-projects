import {EventEmitter} from 'node:events'
import { createAlert } from '../utils/createAlert.js'

export const sightingAlertEmitter = new EventEmitter()

// Register the listener 
sightingAlertEmitter.on('sightingUpdate', createAlert)
sightingAlertEmitter.on('sightingUpdate', () => { console.log('new sighting added')} )

// Emit the listener
sightingAlertEmitter.emit('sightingUpdate', )