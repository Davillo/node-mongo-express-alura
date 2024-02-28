import express from 'express';
import AuthorsController from '../controllers/AuthorsController.js';

const routes = express.Router();

routes.get("/authors", AuthorsController.index);
routes.post("/authors", AuthorsController.store);
routes.get("/authors/:id", AuthorsController.show);
routes.put("/authors/:id", AuthorsController.update);
routes.delete("/authors/:id", AuthorsController.destroy);

export default routes;
