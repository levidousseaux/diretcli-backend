import "reflect-metadata";
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import helmet from "helmet";
import { createConnection } from "typeorm";

/*
import  { AuthController } from './controller/AuthController';
import { checkJwt } from "./middlewares/checkJwt";

import { RecomendationController } from './controller/RecomendationController';
import { DiseaseController } from './controller/DiseaseController';
import { UserController } from './controller/UserController';
*/

import { Recomendation } from './models/Recomendation';
import { Disease } from './models/Disease';
import { User } from './models/User';

import routes from './routes';

// Create a new express application instance
const app = express();
//const authorisedRoute = express.Router();
dotenv.config();

createConnection({
  name: "default",
  type: "mysql",
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  username: "be827aa0f28bbd",
  password: "5b34a369",
  database: "heroku_4674a33dd5ab37b",
  entities: [
      Recomendation,
      Disease,
      User
  ],
  synchronize: true,
  logging: false
}
).then(connection => {  }).catch(error => console.log(error));

// Call middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use("/", routes);
//app.use("/", authorisedRoute);
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

  next();
});

/*
const recomendationController: RecomendationController = new RecomendationController();
const diseaseController: DiseaseController = new DiseaseController();
const userController: UserController = new UserController();
const authController: AuthController = new AuthController();

//Set all routes 
authorisedRoute.post("users/login", authController.login);
authorisedRoute.post('/users/register', userController.CreateUser);
authorisedRoute.get('/users', userController.GetUsers);

authorisedRoute.get('/recomendations/:id', recomendationController.GetAll);
authorisedRoute.post('/create_recomendation', recomendationController.InsertRecomendation);
authorisedRoute.put('/update_recomendation', recomendationController.UpdateRecomendation);
authorisedRoute.delete('/delete_recomendation/:id', recomendationController.DeleteRecomendation);

authorisedRoute.get('/diseases', diseaseController.GetAll);
authorisedRoute.post('/create_disease', diseaseController.InsertDisease);
authorisedRoute.put('/update_disease', diseaseController.UpdateDisease);
authorisedRoute.delete('/delete_disease/:id',diseaseController.DeleteDisease);
*/