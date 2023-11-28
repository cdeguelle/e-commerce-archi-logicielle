import express from "express"
const router = express.Router()

// GET /cart
router.get("/", (req, res) => {
	// Logique pour récupérer le contenu du panier
	res.send("Contenu du panier")
})

// POST /cart
router.post("/", (req, res) => {
	// Logique pour ajouter un produit au panier
	res.send("Produit ajouté au panier")
})

// DELETE /cart
router.delete("/", (req, res) => {
	// Logique pour vider le panier
	res.send("Panier vidé")
})

export default router
