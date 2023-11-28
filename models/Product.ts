import { Schema, model, Document } from "mongoose"

interface Product {
	id: string
	name: string
	description: string
	price: number
	createdAt: Date
	updatedAt: Date
}

const ProductSchema = new Schema<Product>(
	{
		id: { type: String, required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

const ProductModel = model<Product>("Product", ProductSchema)

export default ProductModel
