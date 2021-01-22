import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import diseases from "./diseases";
import recomendations from "./recomendations";


const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/diseases", diseases);
routes.use("/recomedantions", recomendations);

export default routes;