import express from "express"

const router = express.Router()

// GET /orders
router.get("/", (req, res) => {
	// Récupérer toutes les commandes
	res.send("Liste des commandes")
})

// GET /orders/:id
router.get("/:id", (req, res) => {
	const orderId = req.params.id
	// Récupérer la commande avec l'ID spécifié
	res.send(`Commande avec l'ID ${orderId}`)
})

// POST /orders
router.post("/", (req, res) => {
	// Créer une nouvelle commande
	res.send("Nouvelle commande créée")
})

// PUT /orders/:id
router.put("/:id", (req, res) => {
	const orderId = req.params.id
	// Mettre à jour la commande avec l'ID spécifié
	res.send(`Commande avec l'ID ${orderId} mise à jour`)
})

// DELETE /orders/:id
router.delete("/:id", (req, res) => {
	const orderId = req.params.id
	// Supprimer la commande avec l'ID spécifié
	res.send(`Commande avec l'ID ${orderId} supprimée`)
})

export default router
