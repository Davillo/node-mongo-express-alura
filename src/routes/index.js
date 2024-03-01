import express from "express";
import booksRoutes from "./booksRoutes.js";
import authorsRoutes from "./authorsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("teste"));

  app.use(express.json(), authorsRoutes, booksRoutes);
};

export default routes;
