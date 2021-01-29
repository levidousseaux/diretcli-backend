import "reflect-metadata";
import express from 'express';
import * as dotenv from 'dotenv';
import helmet from "helmet";
import { Recomendation } from './models/Recomendation';
import { Disease } from './models/Disease';

import routes from './routes';
import { createConnection } from "typeorm";
import cors from "cors";
import { User } from "./models/User";

const app = express();
dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

createConnection({
/*    name: "default",
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
  }*/
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
).then(() => {  }).catch((error: any) => console.log(error));


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", routes);
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
