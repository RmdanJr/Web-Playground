require('dotenv').config()
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DB_URI)
mongoose.connection.once('open', () => console.log('connected to db'))

const schema = require('./schema')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(process.env.PORT, () => {
  console.log(`listening for requests on ${process.env.PORT}`)
})
