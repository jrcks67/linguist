const express = require("express")
const cors=require("cors");
const app = express()
const PORT = 3001
const v1Routes = require("./v1/routes/index.js")
app.use(express.json())
app.use("/",v1Routes)
app.listen(PORT,()=>{console.log(`Server is running on PORT ${PORT}..`)})
app.use(cors())