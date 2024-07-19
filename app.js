// app.js
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import express from 'express';
import { connectdb } from './db/connect.js';
import products_routes from './routes/products.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectdb();

// Middleware
app.use('/api/products', products_routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
