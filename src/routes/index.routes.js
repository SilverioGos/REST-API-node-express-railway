import { Router } from "express"
import { ping } from '../controlers/index.controlador.js'


const router = Router()

router.get('/ping', ping);

export default router