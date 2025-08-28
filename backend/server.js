const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

connectDb()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/user', userRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000')
})