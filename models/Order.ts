interface OrderItem {
	productId: string
	quantity: number
}

interface Order {
	id: string
	items: OrderItem[]
	createdAt: Date
	updatedAt: Date
}

export default Order
