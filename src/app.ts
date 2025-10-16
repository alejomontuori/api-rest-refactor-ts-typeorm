import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudianteRoute from './routes/estudianteRoute.ts';
import profesorRoute from './routes/profesorRoute.ts';
import cursoRoute from './routes/cursoRoute.ts';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use('/estudiantes', estudianteRoute);
app.use('/profesores', profesorRoute);
app.use('/cursos', cursoRoute);


export default app;