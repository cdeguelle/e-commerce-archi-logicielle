import { Request, Response } from "express"
import Cart from "../models/Cart"

// Obtenir un panier par son ID
export const getCartById = async (req: Request, res: Response) => {
	try {
		const cart = await Cart.findById(req.params.id)
		if (!cart) {
			return res.status(404).json({ message: "Panier non trouvé" })
		}
		res.json(cart)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Créer un nouveau panier
export const createCart = async (req: Request, res: Response) => {
	try {
		const cart = new Cart(req.body)
		const newCart = await cart.save()
		res.status(201).json(newCart)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Supprimer un panier
export const deleteCart = async (req: Request, res: Response) => {
	try {
		const cart = await Cart.findByIdAndDelete(req.params.id)
		if (!cart) {
			return res.status(404).json({ message: "Panier non trouvé" })
		}
		res.json({ message: "Panier supprimé avec succès" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Ajouter un produit au panier
export const addProductToCart = async (req: Request, res: Response) => {
	try {
		const cart = await Cart.findById(req.params.id)
		if (!cart) {
			return res.status(404).json({ message: "Panier non trouvé" })
		}
		cart.products.push(req.body)
		const updatedCart = await cart.save()
		res.json(updatedCart)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Supprimer un produit du panier
export const deleteProductFromCart = async (req: Request, res: Response) => {
	try {
		const cart = await Cart.findById(req.params.id)
		if (!cart) {
			return res.status(404).json({ message: "Panier non trouvé" })
		}
		cart.products = cart.products.filter((product) => product._id != req.params.productId)
		const updatedCart = await cart.save()
		res.json(updatedCart)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}
