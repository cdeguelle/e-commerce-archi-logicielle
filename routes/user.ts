import express from "express"
import UserController from "../controllers/User"

const router = express.Router()

// GET /users/:id
router.get("/:id", UserController.getUserById)

// POST /users
router.post("/", UserController.createUser)

// PUT /users/:id
router.put("/:id", UserController.updateUser)

// DELETE /users/:id
router.delete("/:id", UserController.deleteUser)

export default router
