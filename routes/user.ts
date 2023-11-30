import express from "express"
import UserController from "../controllers/User"
import isLogin from "../middlewares/isLogin"

const router = express.Router()

// GET /users/:id
router.get("/:id", UserController.getUserById)

// PUT /users/:id
router.put("/:id", UserController.updateUser)

// DELETE /users/:id
router.delete("/:id", UserController.deleteUser)

export default router
