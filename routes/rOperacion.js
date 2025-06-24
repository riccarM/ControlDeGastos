import { Router } from "express";
import cOperacion from "../controllers/cOperacion.js";
const routes = Router();

routes.get("/", cOperacion.getAll);

export default routes;
