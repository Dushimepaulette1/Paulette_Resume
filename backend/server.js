require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRouter = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
}))
app.use(express.json())

app.use('/api/contact', contactRouter)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
