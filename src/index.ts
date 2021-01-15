import cors from 'cors';
import express from 'express';
import { createConnection } from "typeorm";
import * as dotenv from 'dotenv';
import helmet from "helmet";
import { Recomendation } from './models/Recomendation';
import { Disease } from './models/Disease';
import { RecomendationController } from './controller/RecomendationController';
import { DiseaseController } from './controller/DiseaseController';
import { UserController } from './controller/UserController';
import { User } from './models/User';
/*
import { User } from './models/User';
import { UserController } from './controller/UserController';
*/

dotenv.config();
const app = express();
const authorisedRoute = express.Router();
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

createConnection({
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "levi1234",
    database: "diretcli",
    entities: [
        Recomendation,
        Disease,
        User
    ],
    synchronize: true,
    logging: false
  }
).then(connection => {  }).catch(error => console.log(error));


app.use("/", authorisedRoute);
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


const recomendationController: RecomendationController = new RecomendationController();
const diseaseController: DiseaseController = new DiseaseController();
const userController: UserController = new UserController();


authorisedRoute.post('/create_user', userController.CreateUser);

authorisedRoute.get('/recomendations/:id', recomendationController.GetAll);
authorisedRoute.post('/create_recomendation', recomendationController.InsertRecomendation);
authorisedRoute.put('/update_recomendation', recomendationController.UpdateRecomendation);
authorisedRoute.delete('/delete_recomendation/:id', recomendationController.DeleteRecomendation);

authorisedRoute.get('/diseases', diseaseController.GetAll);
authorisedRoute.post('/create_disease', diseaseController.InsertDisease);
authorisedRoute.put('/update_disease', diseaseController.UpdateDisease);
authorisedRoute.delete('/delete_disease/:id',diseaseController.DeleteDisease);
