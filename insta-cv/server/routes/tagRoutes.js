import express from 'express';
import tagController from '../controllers/tagController.js';

const router = express.Router();

router.post('/', tagController.createTag);
router.get('/', tagController.getTags);
router.post('/resume', tagController.addTagToResume);
router.delete('/resume', tagController.removeTagFromResume);

export default router;
