const express = require("express")
const router = express.Router()
const homeController = require("../../controllers/linguistController")


router.use("/",homeController)
router.use("/test/:id",)

router.post("/users",homeController.users()) // create new user from the app
router.post("/user/:id",homeController.getUser()) // post user progress
router.get("/content",homeController.getAllContent()) // get the content
router.get("/users/:id",homeController.getUserContent()) // fetch user progress and displayed content object





export default router 
