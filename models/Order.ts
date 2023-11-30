import { Schema, model } from "mongoose"

interface OrderItem {
	productId: string
	quantity: number
}

export interface Order {
	user_id: Schema.Types.ObjectId
	items: OrderItem[]
	createdAt: Date
	updatedAt: Date
}

const OrderSchema = new Schema<Order>(
	{
		user_id: { type: Schema.Types.ObjectId, required: true },
		items: { type: [{ productId: String, quantity: Number }], required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

const OrderModel = model<Order>("Order", OrderSchema)

export default OrderModel
