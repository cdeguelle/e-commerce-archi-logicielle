import { Request, Response } from "express"
import UserModel from "../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const AuthController = {
	signup(req: Request, res: Response) {
		const user = new UserModel({ ...req.body, isLogin: false })
		user.save()
			.then((user) => {
				res.status(201).json({ success: true, user })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	login(req: Request, res: Response) {
		const { email, password } = req.body

		if (!email || !password) {
			return res.status(400).json({ success: false, message: "Missing email and/or password" })
		}

		UserModel.findOne({ email })
			.then((user) => {
				if (!user) {
					return res.status(400).json({ success: false, message: "User does not exist" })
				}

				bcrypt.compare(password, user.password, (err, isMatch) => {
					if (err) {
						return res.status(500).json({ success: false, message: err.message })
					}

					if (isMatch) {
						const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "30d" })
						user.isLogin = true
						user.save()
						return res.status(200).json({ success: true, token })
					} else {
						return res.status(400).json({ success: false, message: "Incorrect password" })
					}
				})
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},

	logout(_req: Request, res: Response) {
		UserModel.findOneAndUpdate({ _id: _req.params.id }, { $set: { isLogin: false } }, { new: true })
			.then((user) => {
				res.status(200).json({ success: true, user })
			})
			.catch((err) => {
				res.status(500).json({ success: false, message: err.message })
			})
	},
}

export default AuthController
