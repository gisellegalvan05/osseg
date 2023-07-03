import express from "express";
import { novedades, novedad, noticiasTop, noticiasAll, prevencionAll, prevencionTop  } from '../controllers/nonovedadController.js'

const router = express.Router();

router.get("/novedades", novedades);

router.get("/novedad/:id", novedad);

router.get("/noticiasTop", noticiasTop);

router.get("/noticiasAll", noticiasAll);

router.get("/prevencionAll", prevencionAll);

router.get("/prevencionTop", prevencionTop);

export default router;