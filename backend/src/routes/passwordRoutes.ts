import express from 'express';
import { addPassword, deletePassword, updatePassword } from '../controllers/passwordController';

const router = express.Router();

// Route pour ajouter un mot de passe
router.post('/', addPassword);

// // Route pour supprimer un mot de passe par ID
// router.delete('/:id', deletePassword);

// // Route pour mettre à jour un mot de passe par ID
// router.put('/:id', updatePassword);

export default router;