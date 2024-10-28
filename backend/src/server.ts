import express from 'express';
import connectDB from './config/database';
import passwordRoutes from './routes/passwordRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Connecter à la base de données
connectDB();

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Utiliser les routes de mots de passe
app.use('/passwords', passwordRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});