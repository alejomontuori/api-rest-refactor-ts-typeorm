import type { Request, Response } from "express";

class CursoCon {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
      res.send("Consultar cursos");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Consultar un curso");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      res.send("Crear curso");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  actualizar(req: Request, res: Response) {
    const { id } = req.params;
    const { dni, nombre, apellido, email } = req.body;
    try {
      res.send("Actualizar curso");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Eliminar un curso");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  asociarEstudiante(req: Request, res: Response) {
    const { id_curso, id_estudiante } = req.body;
    try {
      res.send("asociar un estudiante");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new CursoCon();
