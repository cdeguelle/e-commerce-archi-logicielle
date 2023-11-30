import express from "express"
import CartController from "../controllers/Cart"

const router = express.Router()

// GET /cart
router.get("/", CartController.getCartById)

// POST /cart
router.post("/", CartController.createCart)

// POST /cart/add
router.post("/", CartController.addProductToCart)

// DELETE /cart/remove
router.delete("/", CartController.deleteProductFromCart)

// DELETE /cart
router.delete("/", CartController.deleteCart)

export default router
