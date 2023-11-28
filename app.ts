require("dotenv").config()
const express = require("express")
const app = express()
const port = 3000

app.get("/", (_req: any, res: { send: (arg0: string) => void }) => {
	res.send("Hello World!")
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

async function mongoConnexion() {
	try {
		await mongoose.connect(process.env.MONGO_URI)

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
