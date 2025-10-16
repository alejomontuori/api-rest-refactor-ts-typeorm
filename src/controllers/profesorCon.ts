import type { Request, Response } from "express";

class ProfesorCon {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
      res.send("Consultar profesores");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Consultar un profesor");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      res.send("Crear profesor");
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
      res.send("Actualizar profesor");
  } catch (err) {
     if (err instanceof Error) {
      res.status(500).send(err.message);        
     } 
  }
  }

  borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Eliminar un profesor");
  } catch (err) {
     if (err instanceof Error) {
      res.status(500).send(err.message);        
     } 
  }
  }
}

export default new ProfesorCon();
