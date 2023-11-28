import { Request, Response } from "express"
import { Order } from "../models/Order"

export const createOrder = async (req: Request, res: Response) => {
	try {
		// Récupérer les données de la commande depuis la requête
		const { customerName, products } = req.body

		// Créer une nouvelle commande
		const order = new Order({
			customerName,
			products,
		})

		// Sauvegarder la commande dans la base de données
		await order.save()

		// Répondre avec la commande créée
		res.status(201).json(order)
	} catch (error) {
		// Gérer les erreurs
		res.status(500).json({ error: "Une erreur est survenue lors de la création de la commande" })
	}
}

export const getOrder = async (req: Request, res: Response) => {
	try {
		// Récupérer l'ID de la commande depuis les paramètres de la requête
		const { orderId } = req.params

		// Trouver la commande correspondante dans la base de données
		const order = await Order.findById(orderId)

		// Vérifier si la commande existe
		if (!order) {
			return res.status(404).json({ error: "Commande non trouvée" })
		}

		// Répondre avec la commande trouvée
		res.json(order)
	} catch (error) {
		// Gérer les erreurs
		res.status(500).json({ error: "Une erreur est survenue lors de la récupération de la commande" })
	}
}

// Autres méthodes du contrôleur de commande...
