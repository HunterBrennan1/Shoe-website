require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static("shoe-app"))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([[
  1,
]])

app.listen(3000)