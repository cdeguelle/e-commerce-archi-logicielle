import express from "express"
import OrderController from "../controllers/Order"

const router = express.Router()

// GET /orders
router.get("/", OrderController.getAllOrders)

// GET /orders/:id
router.get("/:id", OrderController.getOrder)

// POST /orders
router.post("/", OrderController.createOrder)

// PUT /orders/:id
router.put("/:id", OrderController.updateOrder)

// DELETE /orders/:id
router.delete("/:id", OrderController.deleteOrder)

export default router
