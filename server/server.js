const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({"it": "works"})
})

app.listen(5000, () => {console.log('server started on 5000')})