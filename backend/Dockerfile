# Utiliser une image de Node.js
FROM node:14

# Créer le dossier de l'application
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port
EXPOSE 5001

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]