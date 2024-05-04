const express = require("express")
const router = express.Router()
const homeController = require("../../controllers/linguistController")

router.post("/signup",homeController.createUser);
router.post("/login",homeController.login);
router.get("/confirm",homeController.confirm);
router.get("/data",homeController.getAllContent);
router.post("/progress",homeController.progress);



module.exports = router
