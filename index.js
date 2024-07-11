import express from "express"
import cors from "cors"
import userRouter from "./routes/users.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/', userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

