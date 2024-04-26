import express from 'express';
import * as SiganturesController from '../controllers/Signatures.js';


const router = express.Router();

// Rutas para el modelo de Usuario
router.get('/signatures',  SignaturesController.getSignatures);
router.get('/signatures/:id', SignaturesController.getSignaturesById);
router.post('/signatures', SignaturesController.createSignatures);
router.put('/signatures/:id', SignaturesController.updateSignatures);
router.delete('/signatures/:id', SignaturesController.deleteSigantures);

export default router;