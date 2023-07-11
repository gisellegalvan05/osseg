import express from "express";
import { internos, direcciones } from '../controllers/noinfutilController.js'

const router = express.Router();

router.get("/internos", internos);

router.get("/direcciones", direcciones);

    export default router;