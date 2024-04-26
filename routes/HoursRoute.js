import express from 'express';
import * as HoursController from '../controllers/Hours.js';


const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/Hours',  HoursController.getHours);
router.get('/Hours/:id', HoursController.getHoursById);
router.post('/Hours', HoursController.createHours);
router.put('/Hours/:id', HoursController.updateHours);
router.delete('/Hours/:id', HoursController.deleteHours);

export default router;