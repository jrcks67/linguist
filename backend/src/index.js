const express = require("express")
const cors=require("cors");
const app = express()
const PORT = 3001
const v1Routes = require("./v1/routes/index.js")
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerSpec.js');
app.use(express.json())
app.use("/",v1Routes)
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(PORT,()=>{console.log(`Server is running on PORT ${PORT}..`)})
