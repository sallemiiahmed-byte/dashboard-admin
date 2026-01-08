# Dashboard Admin - Application de Gestion des Utilisateurs

Application complète de gestion des utilisateurs avec Angular (frontend), NestJS (backend) et PostgreSQL (base de données).

## 🚀 Fonctionnalités

### Backend (NestJS)
- ✅ Authentification JWT sécurisée
- ✅ CRUD complet pour les utilisateurs
- ✅ Cryptage des mots de passe avec bcrypt
- ✅ Gestion des rôles (Admin/User)
- ✅ Gestion des statuts (Actif/Inactif/Suspendu)
- ✅ API RESTful complète
- ✅ Validation des données
- ✅ Statistiques des utilisateurs

### Frontend (Angular)
- ✅ Interface moderne avec Angular Material
- ✅ Page de connexion sécurisée
- ✅ Dashboard avec statistiques
- ✅ Gestion complète des utilisateurs (CRUD)
- ✅ Recherche et filtres avancés
- ✅ Profil utilisateur
- ✅ Design responsive et moderne
- ✅ Gestion des erreurs et notifications

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- PostgreSQL (v12 ou supérieur)
- npm ou yarn

## 🛠️ Installation

### 1. Configuration de la base de données PostgreSQL

Créez une base de données PostgreSQL :

```sql
CREATE DATABASE dashboard_admin;
```

### 2. Installation du Backend

```bash
cd backend
npm install
```

Créez un fichier `.env` dans le dossier `backend` :

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=dashboard_admin

JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=24h

PORT=3000
CORS_ORIGIN=http://localhost:4200
```

### 3. Installation du Frontend

```bash
cd frontend
npm install
```

## 🚀 Démarrage

### Backend

```bash
cd backend
npm run start:dev
```

Le backend sera accessible sur `http://localhost:3000`

### Frontend

```bash
cd frontend
npm start
```

Le frontend sera accessible sur `http://localhost:4200`

## 👤 Création du premier utilisateur admin

**L'utilisateur admin est créé automatiquement au démarrage du backend !**

Lors du premier démarrage, un utilisateur admin est automatiquement créé avec les identifiants suivants :
- **Email:** `admin@example.com`
- **Mot de passe:** `admin123`

Vous pouvez vous connecter directement avec ces identifiants. Si l'utilisateur existe déjà, le seed ne créera pas de doublon.

**Note:** Pour la production, changez ces identifiants par défaut dans le fichier `backend/src/users/seed.ts`.

## 📁 Structure du projet

```
dashboard-admin/
├── backend/
│   ├── src/
│   │   ├── auth/          # Module d'authentification
│   │   ├── users/          # Module de gestion des utilisateurs
│   │   └── main.ts         # Point d'entrée
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # Composants Angular
│   │   │   ├── services/       # Services
│   │   │   ├── guards/         # Guards de route
│   │   │   └── interceptors/   # Intercepteurs HTTP
│   │   └── styles.scss
│   ├── package.json
│   └── angular.json
│
└── README.md
```

## 🔐 Sécurité

- Les mots de passe sont cryptés avec bcrypt (10 rounds)
- Authentification JWT avec expiration
- Guards pour protéger les routes
- Validation des données côté serveur
- CORS configuré

## 🎨 Design

L'application utilise Angular Material avec un design moderne incluant :
- Interface responsive
- Animations fluides
- Couleurs et gradients modernes
- Icônes Material Design
- Cards et composants Material

## 📝 API Endpoints

### Authentification
- `POST /auth/login` - Connexion

### Utilisateurs (nécessite authentification admin)
- `GET /users` - Liste des utilisateurs
- `GET /users/:id` - Détails d'un utilisateur
- `POST /users` - Créer un utilisateur
- `PATCH /users/:id` - Modifier un utilisateur
- `DELETE /users/:id` - Supprimer un utilisateur
- `GET /users/stats` - Statistiques
- `GET /users/profile` - Profil de l'utilisateur connecté

## 🧪 Technologies utilisées

### Backend
- NestJS
- TypeORM
- PostgreSQL
- JWT
- bcrypt
- class-validator

### Frontend
- Angular 16
- Angular Material
- RxJS
- TypeScript

## 📄 Licence

MIT

## 👨‍💻 Développement

Pour contribuer au projet :
1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 🐛 Support

Pour toute question ou problème, veuillez ouvrir une issue sur le repository.

