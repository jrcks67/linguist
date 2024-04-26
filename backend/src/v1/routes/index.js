const express = require("express")
const router = express.Router()
const homeController = require("../../controllers/linguistController")

 router.post("/user", (req, res) => { // create new user
   const resposne = homeController.users(req)
   res.json(resposne)
  })

// router.get("/user?email",homeController.getUserContent())// fetch user progress and displayed content object

// router.post("/user/:id",homeController.getUser()) // post user progress real time data
module.exports = router
