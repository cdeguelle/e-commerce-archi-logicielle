import { Request, Response } from "express"
import Cart from "../models/Cart"

// Obtenir un panier par son ID
export const getCartById = async (req: Request, res: Response) => {}

// Créer un nouveau panier
export const createCart = async (req: Request, res: Response) => {}

// Supprimer un panier
export const deleteCart = async (req: Request, res: Response) => {}

// Ajouter un produit au panier
export const addProductToCart = async (req: Request, res: Response) => {}

// Supprimer un produit du panier
export const deleteProductFromCart = async (req: Request, res: Response) => {}
