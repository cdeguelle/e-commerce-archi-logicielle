import { Schema, model } from "mongoose"

export interface Product {
	id: string
	name: string
	genres: string[]
	year: number | null
	price: number
	createdAt: Date
	updatedAt: Date
}

const ProductSchema = new Schema<Product>(
	{
		id: { type: String, required: true },
		name: { type: String, required: true },
		genres: { type: [String], required: true },
		year: { type: Number },
		price: { type: Number, required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

const ProductModel = model<Product>("Product", ProductSchema)

export default ProductModel
