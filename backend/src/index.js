const express = require("express")
const router = express.Router()
const app = express()
const PORT = 3000
const v1Routes = require("./v1/routes/index.js")

app.use("",v1Routes)
