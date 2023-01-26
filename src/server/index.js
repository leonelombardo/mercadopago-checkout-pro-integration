import express from "express"

import { router } from "./router/router.js"
import { PORT } from "./config.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

router(app)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))