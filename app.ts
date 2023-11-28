require("dotenv").config()
import express from "express"
import mongoose from "mongoose"
import helmet from "helmet"
import { productRouter, orderRouter, userRouter } from "./routes"
import createError from "http-errors"
import cors from "cors"
import compression from "compression"

const app = express()
const port = 3000

app.get("/", (_req: any, res: { send: (arg0: string) => void }) => {
	res.send("Hello World!")
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

mongoose.set("strictQuery", false)

async function mongoConnexion() {
	try {
		await mongoose.connect(process.env.MONGO_URI!)

		mongoose.connection.on("error", (err: { message: any }) => {
			console.log(err?.message)
		})

		return console.log("Mongoose connected ! 🔥")
	} catch (error: any) {
		console.log(error?.message)
		process.exit(1)
	}
}

mongoConnexion()

app.use(helmet())
app.use(express.json({ limit: "10mb" }))
app.use(cors())
app.use(compression())

app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/user", userRouter)
app.use((_req: any, _res: any, next: any) => next(createError(404)))
