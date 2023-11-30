import { Request, Response } from "express"
import CartModel from "../models/Cart"

const CartController = {
	// Obtenir un panier par son ID
	getCartById(req: Request, res: Response) {
		CartModel.findById(req.params.id)
			.then((cart) => {
				res.status(200).json({ success: true, cart })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Créer un nouveau panier
	createCart(req: Request, res: Response) {
		const cart = new CartModel(req.body)
		cart.save()
			.then((cart) => {
				res.status(201).json({ success: true, cart })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Supprimer un panier
	deleteCart(req: Request, res: Response) {
		CartModel.findOneAndDelete({ _id: req.params.id })
			.then((cart) => {
				res.status(200).json({ success: true, cart })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Ajouter un produit au panier
	addProductToCart(req: Request, res: Response) {
		CartModel.findOneAndUpdate({ _id: req.params.id }, { $push: { products: req.body } }, { new: true })
			.then((cart) => {
				res.status(200).json({ success: true, cart })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	// Supprimer un produit du panier
	deleteProductFromCart(req: Request, res: Response) {
		CartModel.findOneAndUpdate({ _id: req.params.id }, { $pull: { products: { _id: req.params.productId } } }, { new: true })
			.then((cart) => {
				res.status(200).json({ success: true, cart })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},
}

export default CartController
