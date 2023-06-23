import express from "express";
import { internos } from '../controllers/noinfutilController.js'

const router = express.Router();

router.get("/internos", internos);

    export default router;