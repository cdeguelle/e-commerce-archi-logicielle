import express from "express"
import OrderController from "../controllers/Order"
import isLogin from "../middlewares/isLogin"

const router = express.Router()

// GET /orders
router.get("/", isLogin, OrderController.getAllOrders)

// GET /orders/:id
router.get("/:id", isLogin, OrderController.getOrder)

// POST /orders
router.post("/", isLogin, OrderController.createOrder)

// PUT /orders/:id
router.put("/:id", isLogin, OrderController.updateOrder)

// DELETE /orders/:id
router.delete("/:id", isLogin, OrderController.deleteOrder)

export default router
