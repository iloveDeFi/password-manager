# Utiliser une image de Node.js
FROM node:18

# Créer le dossier de l'application
WORKDIR /Password/frontend

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]