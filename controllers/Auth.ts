import { Request, Response } from "express"

class AuthController {
	public login(req: Request, res: Response): void {
		// Logique de connexion
	}

	public register(req: Request, res: Response): void {
		// Logique d'inscription
	}

	public logout(req: Request, res: Response): void {
		// Logique de déconnexion
	}
}

export default AuthController
