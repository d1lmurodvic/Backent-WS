const express = require('express');
const app = express()
const { Server } = require('socket.io')
const http = require('http')
const server = http.createServer(app)

const PORT = 5000

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})


console.log("===============================")
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT || 5000}`)
    console.log("SERVER CREATED BY SARDOR XOJIMURODOV")
    console.log("===============================")
})
