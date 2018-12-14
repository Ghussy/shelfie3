
const controller = require('./controller')
const express = require('express')
const massive = require('massive')
require('dotenv').config()
const {PORT, CONNECTION_STRING} = process.env


const app = express();

app.use(express.json());

app.get('/api/prod', controller.getAll)
app.post('/api/post', controller.post)

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
}).catch(err => console.log(err))
app.listen(PORT, () => console.log(`listening on port ${PORT}`))