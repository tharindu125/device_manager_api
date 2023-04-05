require('dotenv').config()

const Express = require('express')
const mongoose = require('mongoose')

const routeLocation = require('./routes/routeLocation')
const routerDevice = require('./routes/routeDevice')
const routerLogin = require('./routes/routeLogin')

//express app
const app =Express()

//middleware
app.use(Express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/location', routeLocation)
app.use('/device', routerDevice)
app.use('/login', routerLogin)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT , () => {
            console.log('connected to db, listening in port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })