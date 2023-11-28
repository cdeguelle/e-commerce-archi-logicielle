interface CartItem {
	productId: string
	quantity: number
}

interface Cart {
	id: string
	items: CartItem[]
	createdAt: Date
	updatedAt: Date
}

export default Cart
