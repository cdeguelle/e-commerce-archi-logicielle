import { Request, Response } from "express"
import ProductModel, { Product } from "../models/Product"

const ProductController = {
	getAllProducts(req: Request, res: Response) {
		ProductModel.find()
			.then((products) => {
				// limit: 1000
				products = products.slice(0, 1000)
				res.status(200).json({ success: true, products })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	getProductById(req: Request, res: Response) {
		ProductModel.findById(req.params.id)
			.then((product) => {
				res.status(200).json({ success: true, product })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	createProduct(req: Request, res: Response) {
		const product = new ProductModel(req.body)
		product
			.save()
			.then((product) => {
				res.status(201).json({ success: true, product })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	createProducts(req: Request, res: Response) {
		const products = req.body
		const productsToCreate: Product[] = []
		products.forEach(async (product: any) => {
			const productToCreate = new ProductModel({
				id: product.tconst,
				name: product.primaryTitle,
				genres: product.genres.split(","),
				year: product.startYear === "\\N" ? null : product.startYear,
				price: 62,
			})
			productsToCreate.push(productToCreate)
		})
		ProductModel.insertMany(productsToCreate).then((products) => {
			res.status(201).json({ success: true, products })
		})
	},
}

export default ProductController
