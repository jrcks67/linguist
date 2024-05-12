const express = require("express")
const router = express.Router()
const homeController = require("../../controllers/linguistController")


/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate user with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: roshini
 *               password:
 *                 type: string
 *                 example: roshini@123
 *     example:
 *       username: roshini
 *       password: roshini@123
 *     responses:
 *       200:
 *         description: Successful login. Returns an authorization token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */
router.post("/login", homeController.loginUser);
/**
 * @swagger
 * /homedata:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *       500:
 *         description: Internal server error
 */
router.get("/homedata",homeController.homeData);
/**
 * @swagger
 * /data:
 *   get:
 *     summary: Get data
 *     description: Retrieve data
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal server error
 */
router.get("/data",homeController.getAllData);
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: User signup
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: roshini
 *               email:
 *                 type: string
 *                 example: roshini123@gmail.com
 *               password:
 *                 type: string
 *                 example: roshini@123
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Bad request - User already exists or missing required fields
 *       500:
 *         description: Internal server error
 */
router.post("/signup",homeController.createUser);
/**
 * @swagger
 * /progress:
 *   post:
 *     summary: Update user progress
 *     description: Update the user's progress
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               progress:
 *                 type: object
 *                 properties:
 *                   progressMade:
 *                     type: integer
 *     examples:
 *       example-1:
 *         value:
 *           progress:
 *             progressMade: 50
 *     responses:
 *       200:
 *         description: Progress updated successfully
 *       400:
 *         description: Bad request - Missing progress object or invalid format
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal server error
 */
router.post("/progress",homeController.updateProgress);

module.exports = router
