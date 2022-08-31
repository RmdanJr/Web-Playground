const cors = require('cors')
const express = require('express')
const upload = require('express-fileupload')

const app = express();

app.use(cors())

app.use(upload())

app.post('/api/upload', async (req, res) => {
 const file = req.files.file
 const extension = file.name.split('.').reverse()[0]
 const filename = `${Date.now()}.${extension}`
 file.mv(`./uploads/${filename}`)
 res.json({ url: `/uploads/${filename}` })
})

app.get('/uploads/:filename', async (req, res) => {
 res.sendFile(`${__dirname}/uploads/${req.params.filename}`)
})

app.listen(4000)