import express from 'express'
import empleadorutas from './routes/empleados.routes.js'
import indexrutas from './routes/index.routes.js'
import {PORT} from './config.js'

const apli= express()

apli.use(express.json())

apli.use(indexrutas)
apli.use(empleadorutas)

apli.use((req, res, next) => {
    res.status(404).json({
        mensaje: "No existe la ruta"
    })
})
apli.listen(PORT)
console.log("Corriendo en el puerto ", PORT)