import { Request, Response } from "express"
import OrderModel from "../models/Order"

const OrderController = {
	createOrder(req: Request, res: Response) {
		const order = new OrderModel(req.body)
		order
			.save()
			.then((order) => {
				res.status(201).json({ success: true, order })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	getOrder(req: Request, res: Response) {
		OrderModel.findById(req.params.id)
			.then((order) => {
				res.status(200).json({ success: true, order })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	getAllOrders(req: Request, res: Response) {
		OrderModel.find()
			.then((orders) => {
				res.status(200).json({ success: true, orders })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	updateOrder(req: Request, res: Response) {
		OrderModel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
			.then((order) => {
				res.status(200).json({ success: true, order })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	deleteOrder(req: Request, res: Response) {
		OrderModel.findOneAndDelete({ _id: req.params.id })
			.then((order) => {
				res.status(200).json({ success: true, order })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},
}

export default OrderController
