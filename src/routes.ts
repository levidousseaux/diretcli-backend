import { Router } from "express";
import auth from "./routes/auth";
import user from "./routes/user";
import diseases from "./routes/diseases";
import recomendations from "./routes/recomendations";
import comments from "./routes/comments";
import source from "./routes/source";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/diseases", diseases);
routes.use("/recomendations", recomendations);
routes.use("/comments", comments);
routes.use("/sources", source);

export default routes;