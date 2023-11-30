import express from "express"
import ProductController from "../controllers/Product"
import isLogin from "../middlewares/isLogin"

const router = express.Router()

// GET /products
router.get("/", isLogin, ProductController.getAllProducts)

// GET /products/:id
router.get("/:id", isLogin, ProductController.getProductById)

// POST /products
router.post("/", isLogin, ProductController.createProducts)

// PUT /products/:id
router.put("/:id", isLogin, ProductController.createProduct)

// DELETE /products/:id
router.delete("/:id", isLogin, ProductController.createProduct)

export default router
