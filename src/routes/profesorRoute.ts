import express from 'express';
import ProfesorCon from '../controllers/profesorCon.ts';
const router = express.Router();

router.get("/", ProfesorCon.consultar);

router.post("/", ProfesorCon.ingresar);

router.route("/:id")
    .put(ProfesorCon.actualizar)
    .delete(ProfesorCon.borrar)
    .get(ProfesorCon.consultarDetalle);


export default router;
