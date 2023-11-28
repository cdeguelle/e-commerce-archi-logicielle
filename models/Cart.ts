import { Schema, model, Document } from "mongoose"

interface CartItem {
	productId: string
	quantity: number
}

interface CartItem {
	productId: string
	quantity: number
}

interface Cart extends Document {
	id: string
	items: CartItem[]
	createdAt: Date
	updatedAt: Date
}

const CartSchema = new Schema<Cart>(
	{
		id: { type: String, required: true },
		items: { type: [{ productId: String, quantity: Number }], required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

const CartModel = model<Cart>("Cart", CartSchema)

export default CartModel
