import express from "express";
import session from "express-session";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import error from "./midlewares/error.js";
import routesOperacion from "./routes/rOperacion.js";

// variables
const __dirname = process.cwd();
const app = express();
const port = 3000;

// uso de midlewwares

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// estableciendo ruta para vistas y el uso del template engine

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// rutas estaticas

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use(routesOperacion);
app.use(error.e404);

// levantando servidor
app.listen(port, () => {
  console.log(`la aplicacion esta funcionando en http://localhost:${port}`);
});
