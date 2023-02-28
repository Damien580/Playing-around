require('dotenv').config()
import axios from 'axios'
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getSanctuary, createSanc, deleteSanc} = require('./controller.js')

app.use(express.json())
app.use(cors())
app.use(axios())
// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/Sanctuary', getSanctuary)

// CITIES
app.post('/Sanctuary', createSanc)
app.delete('/Sanctuary/:id', deleteSanc)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))