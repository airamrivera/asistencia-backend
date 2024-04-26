import express from 'express';
import * as ObservationsController from '../controllers/Observations.js';


const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/observations',  ObservationsController.getObservations);
router.get('/observations/:id', ObservationsController.getObservationsById);
router.post('/observations', ObservationsController.createObservations);
router.put('/observations/:id', ObservationsController.updateObservations);
router.delete('/observations/:id', ObservationsController.deleteObservations);

export default router;