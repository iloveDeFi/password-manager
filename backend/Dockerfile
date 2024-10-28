# Utiliser une image de Node.js
FROM node:latest

# Créer le dossier de l'application
WORKDIR /Password/backend

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

RUN npm install -g nodemon

# Copier le reste des fichiers
COPY . .

# Exposer le port
EXPOSE 4000

# Commande pour démarrer l'application
# CMD ["npm", "run", "dev"]

CMD ["npm", "run", "dev"]