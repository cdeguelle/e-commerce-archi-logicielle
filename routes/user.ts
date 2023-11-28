import express from "express"

const router = express.Router()

// GET /users
router.get("/", (req, res) => {
	// Code pour récupérer tous les utilisateurs
})

// GET /users/:id
router.get("/:id", (req, res) => {
	// Code pour récupérer un utilisateur par son ID
})

// POST /users
router.post("/", (req, res) => {
	// Code pour créer un nouvel utilisateur
})

// PUT /users/:id
router.put("/:id", (req, res) => {
	// Code pour mettre à jour un utilisateur par son ID
})

// DELETE /users/:id
router.delete("/:id", (req, res) => {
	// Code pour supprimer un utilisateur par son ID
})

export default router
