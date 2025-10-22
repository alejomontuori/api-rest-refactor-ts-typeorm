import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudianteModel.ts";
import { Profesor } from "../models/profesorModel.ts";
import { Curso } from "../models/cursoModel.ts";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "apicursots",
    synchronize: false,
    logging: true,
    entities: [Estudiante, Profesor, Curso],
//  subscribers: [],
//  migrations: [],
})
export default AppDataSource;