import express from "express"
import cors from "cors"
import path from "path"

const app = express()
const assets = express.static(path.join(__dirname,"../"))

app.use(cors())
app.use(assets)

export default app