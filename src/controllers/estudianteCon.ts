import type { Request, Response } from "express";

class EstudianteCon {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
      res.send("Consultar estudinates");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Consultar un estudiante");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      res.send("Crear estudinate");
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
      res.send("Actualizar estudinate");
  } catch (err) {
     if (err instanceof Error) {
      res.status(500).send(err.message);        
     } 
  }
  }

  borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Eliminar un estudinate");
  } catch (err) {
     if (err instanceof Error) {
      res.status(500).send(err.message);        
     } 
  }
  }
}

export default new EstudianteCon();
