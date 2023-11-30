import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import UserModel from "../models/User"

const isLogin = async (req: Request, res: Response, next: NextFunction) => {
	if (req.headers.authorization) {
		const authorization = req.headers.authorization.split(" ")[1]
		const decoded = verify(authorization, process.env.JWT_SECRET!) as { id: string }
		const isLogin = await UserModel.findById(decoded.id).then((user) => user?.isLogin)

		if (isLogin) {
			next()
		} else {
			res.status(401).json({ success: false, message: "Not login, sorry" })
		}
	}

	if (!req.headers.authorization) {
		res.status(401).json({ success: false, message: "Acces denied" })
	}
}

export default isLogin
