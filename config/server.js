const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World")
}),

app.post('/', (req, res) => {
    const data = {
        id:1,
        name: "Adi",
        address: "Chicago"
    }
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

