const express = require("express")
const router = express.Router()
const homeController = require("../../controllers/linguistController")

router.post("/signup",homeController.createUser);
router.post("/login",homeController.loginUser);
router.post("/confirm",homeController.confirmUser);
router.get("/data",homeController.getAllData);
router.post("/progress",homeController.updateProgress);



module.exports = router
