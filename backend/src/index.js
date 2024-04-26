const express = require("express")
const app = express()
const PORT = 3000
const v1Routes = require("./v1/routes/index.js")
app.use(express.json())
app.use("/",v1Routes)
app.listen(PORT,()=>{console.log("Server is running..")})
