import express from 'express';
import resumesController from '../controllers/resumesController.js';

const router = express.Router();

// Routes for resume operations
router.post('/', resumesController.saveResume);
router.get('/', resumesController.getResumes);
router.get('/:resumeId', resumesController.getResume);
router.delete('/:resumeId', resumesController.deleteResume);

export default router;
