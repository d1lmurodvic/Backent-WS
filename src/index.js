const express = require('express');
const app = express()
const Server = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = Server(server)

const PORT = 5000

console.log("===============================")
server.listen(PORT, () => {
    console.log('Server running on port 5000')
    console.log("===============================")
})
