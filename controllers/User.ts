import { Request, Response } from "express"

class UserController {
	public static getUsers(req: Request, res: Response): void {
		// Logique pour récupérer tous les utilisateurs
		res.send("Liste des utilisateurs")
	}

	public static getUser(req: Request, res: Response): void {
		const userId = req.params.id
		// Logique pour récupérer un utilisateur par son ID
		res.send(`Utilisateur avec l'ID ${userId}`)
	}

	public static createUser(req: Request, res: Response): void {
		const { name, email, password } = req.body
		// Logique pour créer un nouvel utilisateur
		res.send(`Utilisateur créé : ${name}, ${email}`)
	}

	public static updateUser(req: Request, res: Response): void {
		const userId = req.params.id
		const { name, email, password } = req.body
		// Logique pour mettre à jour un utilisateur par son ID
		res.send(`Utilisateur mis à jour : ${userId}, ${name}, ${email}`)
	}

	public static deleteUser(req: Request, res: Response): void {
		const userId = req.params.id
		// Logique pour supprimer un utilisateur par son ID
		res.send(`Utilisateur supprimé : ${userId}`)
	}
}

export default UserController
