# 🚀 Démarrage Rapide

## Prérequis

1. **PostgreSQL** doit être installé et démarré
2. Créez la base de données :
   ```sql
   CREATE DATABASE dashboard_admin;
   ```

## Configuration

### 1. Créer le fichier `.env` dans le dossier `backend`

Copiez `backend/env.example` vers `backend/.env` et modifiez les valeurs :

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=votre_mot_de_passe_postgres
DB_DATABASE=dashboard_admin

JWT_SECRET=votre-secret-jwt
JWT_EXPIRES_IN=24h

PORT=3000
CORS_ORIGIN=http://localhost:4200
```

## Démarrage

### Option 1 : Script automatique (Windows)

Double-cliquez sur `start.bat` ou exécutez :
```bash
start.bat
```

### Option 2 : Démarrage manuel

**Terminal 1 - Backend :**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend :**
```bash
cd frontend
npm start
```

## Accès

- **Frontend** : http://localhost:4200
- **Backend API** : http://localhost:3000

## Connexion

L'utilisateur admin est créé automatiquement :
- **Email** : `admin@example.com`
- **Mot de passe** : `admin123`

## ⚠️ Note sur Node.js

Ce projet nécessite **Node.js 16+**. Si vous voulez utiliser Node 14.17.3, vous devrez downgrader les versions de NestJS et Angular (voir `NODE_VERSION.md`).

