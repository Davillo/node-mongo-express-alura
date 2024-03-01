import express from "express";
import BooksController from "../controllers/BooksController.js";

const routes = express.Router();

routes.get("/books", BooksController.index);
routes.post("/books/search", BooksController.search);
routes.post("/books", BooksController.store);
routes.get("/books/:id", BooksController.show);
routes.put("/books/:id", BooksController.update);
routes.delete("/books/:id", BooksController.destroy);

export default routes;
