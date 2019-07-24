const express = require('express')

// Create express instance
const app = express()

// Require API routes
const gallery = require('./routes/gallery')

// Import API routes
app.use(gallery)

// Export the server middleware
module.exports = {
  path: 'api/',
  handler: app
}
