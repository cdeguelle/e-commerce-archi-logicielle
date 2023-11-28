import { Schema, model, Document } from "mongoose"

interface User {
	id: string
	email: string
	password: string
	createdAt: Date
	updatedAt: Date
}

const UserSchema = new Schema<User>(
	{
		id: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{ timestamps: true }
)

const UserModel = model<User>("User", UserSchema)

export default UserModel