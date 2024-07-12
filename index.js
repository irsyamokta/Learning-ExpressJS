import express from "express"
import cors from "cors"
import "dotenv/config"
import userRouter from "./routes/users.js"

const app = express()
const port = process.env.APP_PORT

app.use(express.json())
app.use(cors())
app.use('/', userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

