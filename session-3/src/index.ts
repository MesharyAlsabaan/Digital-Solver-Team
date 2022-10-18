import express from 'express';
import router from './routes';
import * as dotenv from 'dotenv';
import bodyParser from'body-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(router);

dotenv.config();

const PORT = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} environment ${environment}`);
});