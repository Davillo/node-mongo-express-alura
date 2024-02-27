import express from "express";
import connect from "./config/databaseConnection.js";
import routes from './routes/index.js';

const connection = await connect();

connection.on('error', (error) => {
    console.log('error: ', error);
});

const app = express();
routes(app);

export default app;