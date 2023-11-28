import express from "express"

const router = express.Router()

// GET /products
router.get("/", (req, res) => {
	// Code pour récupérer tous les produits
})

// GET /products/:id
router.get("/:id", (req, res) => {
	// Code pour récupérer un produit par son ID
})

// POST /products
router.post("/", (req, res) => {
	// Code pour créer un nouveau produit
})

// PUT /products/:id
router.put("/:id", (req, res) => {
	// Code pour mettre à jour un produit par son ID
})

// DELETE /products/:id
router.delete("/:id", (req, res) => {
	// Code pour supprimer un produit par son ID
})

export default router
