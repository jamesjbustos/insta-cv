// routes/pdfRoutes.js
import express from 'express';
import resumesController from '../controllers/resumesController.js';

const router = express.Router();

// Routes for resume operations
router.post('/resumes', resumesController.saveResume);
router.get('/resumes', resumesController.getResumes);

export default router;
