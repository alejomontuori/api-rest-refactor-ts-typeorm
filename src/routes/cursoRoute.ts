import express from 'express';
import CursoCon from "../controllers/cursoCont.ts";
const router = express.Router();

router.get("/", CursoCon.consultar);

router.post("/", CursoCon.ingresar);
router.post('/registraEstudiante', CursoCon.asociarEstudiante);

router.route("/:id")
    .put(CursoCon.actualizar)
    .delete(CursoCon.borrar)
    .get(CursoCon.consultarDetalle);


export default router;
