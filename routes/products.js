// routes/products.js
import express from 'express';
const router = express.Router();
import { getAllProducts, getAllProductsTesting } from '../controllers/products.js';

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);

export default router;
