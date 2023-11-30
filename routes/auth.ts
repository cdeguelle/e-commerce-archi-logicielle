import express from "express"
import AuthController from "../controllers/Auth"
import isLogin from "../middlewares/isLogin"

const router = express.Router()

// POST /signup
router.post("/signup", AuthController.signup)

// POST /login
router.post("/login", AuthController.login)

// GET /logout/:id
router.get("/logout/:id", isLogin, AuthController.logout)

export default router
