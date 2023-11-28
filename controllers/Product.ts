import { Request, Response } from "express"
import Product from "../models/Product"

// Obtenir tous les produits
export const getAllProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.find()
		res.json(products)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Obtenir un produit par son ID
export const getProductById = async (req: Request, res: Response) => {
	try {
		const product = await Product.findById(req.params.id)
		if (!product) {
			return res.status(404).json({ message: "Produit non trouvé" })
		}
		res.json(product)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Créer un nouveau produit
export const createProduct = async (req: Request, res: Response) => {
	try {
		const product = new Product(req.body)
		const newProduct = await product.save()
		res.status(201).json(newProduct)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Mettre à jour un produit
export const updateProduct = async (req: Request, res: Response) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!product) {
			return res.status(404).json({ message: "Produit non trouvé" })
		}
		res.json(product)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Supprimer un produit
export const deleteProduct = async (req: Request, res: Response) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id)
		if (!product) {
			return res.status(404).json({ message: "Produit non trouvé" })
		}
		res.json({ message: "Produit supprimé avec succès" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
