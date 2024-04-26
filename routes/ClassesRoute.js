import express from 'express';
import * as ClassesController from '../controllers/Classes.js';


const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/classes',  ClassesController.getClasses);
router.get('/classes/:id', ClassesController.getClassesById);
router.post('/classes', ClassesController.createClasses);
router.put('/classes/:id', ClassesController.updateClasses);
router.delete('/classes/:id', ClassesController.deleteClasses);

export default router;