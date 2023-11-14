import express from 'express';
import { generatePDF } from '../controllers/pdfController.js';

const router = express.Router();

// Route to generate PDF
router.post('/', generatePDF);

export default router;
