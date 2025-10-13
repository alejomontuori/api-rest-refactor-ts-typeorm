import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.listen(6505, () => {
    console.log("Server activo")
});