import express from 'express';
import EstudianteCon from "../controllers/estudianteCon.ts";
const router = express.Router();

router.get("/", EstudianteCon.consultar);

router.post("/", EstudianteCon.ingresar);

router.route("/:id")
    .put(EstudianteCon.actualizar)
    .delete(EstudianteCon.borrar)
    .get(EstudianteCon.consultarDetalle);


export default router;
