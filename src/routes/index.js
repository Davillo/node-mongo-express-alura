import express from 'express';
import booksRoutes from './booksRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('teste'));

    app.use(express.json(), booksRoutes);
};

export default routes;