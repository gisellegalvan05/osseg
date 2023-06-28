import express from "express";
import { novedades, novedad, noticiasTop, noticiasAll } from '../controllers/nonovedadController.js'

const router = express.Router();

router.get("/novedades", novedades);

router.get("/novedades/:NONovID", novedad);

router.get("/noticiasTop", noticiasTop);

router.get("/noticiasAll", noticiasAll);

    export default router;