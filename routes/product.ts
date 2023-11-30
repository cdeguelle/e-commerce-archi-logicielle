import express from "express"
import ProductController from "../controllers/Product"
import isLogin from "../middlewares/isLogin"

const router = express.Router()

// GET /products
router.get("/", ProductController.getAllProducts)

// GET /products/:id
router.get("/:id", ProductController.getProductById)

// POST /products
router.post("/", ProductController.createProducts)

// PUT /products/:id
router.put("/:id", ProductController.createProduct)

// DELETE /products/:id
router.delete("/:id", ProductController.createProduct)

export default router
