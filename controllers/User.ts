import { Request, Response } from "express"
import UserModel from "../models/User"

const UserController = {
	// Obtenir un utilisateur par son ID
	getUserById(req: Request, res: Response) {
		UserModel.findById(req.params.id)
			.then((user) => {
				res.status(200).json({ success: true, user })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Créer un nouvel utilisateur
	createUser(req: Request, res: Response) {
		const user = new UserModel(req.body)
		user.save()
			.then((user) => {
				res.status(201).json({ success: true, user })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Mettre à jour un utilisateur
	updateUser(req: Request, res: Response) {
		UserModel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
			.then((user) => {
				res.status(200).json({ success: true, user })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Supprimer un utilisateur
	deleteUser(req: Request, res: Response) {
		UserModel.findOneAndDelete({ _id: req.params.id })
			.then((user) => {
				res.status(200).json({ success: true, user })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},
}

export default UserController
