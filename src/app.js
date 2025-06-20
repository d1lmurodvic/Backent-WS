const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/AuthRoutes')
const messageRoutes = require('./routes/MessageRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('api/auth', authRoutes)
app.use('api/message', messageRoutes)

app.get('/', (req, res) => {
    res.send('Tez Bozor is running....')
})

export default app