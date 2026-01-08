# 📦 Installation pour Node.js 14.17.3

Ce guide vous explique comment installer et lancer le projet avec Node.js 14.17.3.

## 🔧 Prérequis

1. **Node.js 14.17.3** installé
2. **PostgreSQL** installé et démarré
3. **Git** installé

## 📋 Étapes d'Installation

### 1. Vérifier la version de Node.js

```bash
node --version
# Doit afficher: v14.17.3
```

Si ce n'est pas le cas, installez nvm-windows :
1. Téléchargez : https://github.com/coreybutler/nvm-windows/releases
2. Installez `nvm-setup.exe`
3. Redémarrez votre terminal
4. Exécutez :
   ```bash
   nvm install 14.17.3
   nvm use 14.17.3
   ```

### 2. Cloner ou basculer sur la branche node-14

Si vous avez déjà le projet :
```bash
git checkout node-14
```

Si vous clonez le projet :
```bash
git clone https://github.com/sallemiiahmed-byte/dashboard-admin.git
cd dashboard-admin
git checkout node-14
```

### 3. Nettoyer les anciennes installations

```bash
# Supprimer les node_modules et lock files
rm -rf backend/node_modules frontend/node_modules
rm backend/package-lock.json frontend/package-lock.json
```

**Sur Windows PowerShell :**
```powershell
Remove-Item -Recurse -Force backend/node_modules, frontend/node_modules
Remove-Item backend/package-lock.json, frontend/package-lock.json
```

### 4. Installer les dépendances du Backend

```bash
cd backend
npm install
```

### 5. Installer les dépendances du Frontend

```bash
cd ../frontend
npm install
```

### 6. Configurer PostgreSQL

Créez la base de données :
```sql
CREATE DATABASE dashboard_admin;
```

Créez le fichier `backend/.env` :
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=votre_mot_de_passe
DB_DATABASE=dashboard_admin

JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=24h

PORT=3000
CORS_ORIGIN=http://localhost:4200
```

### 7. Lancer le projet

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

## ✅ Vérification

- **Backend** : http://localhost:3000
- **Frontend** : http://localhost:4200

**Connexion admin :**
- Email : `admin@example.com`
- Mot de passe : `admin123`

## 🔄 Retour aux versions modernes

Pour revenir aux versions modernes (Node 16+), basculez sur la branche `develop` ou `main` :

```bash
git checkout develop
```

Puis réinstallez les dépendances.

## ⚠️ Notes Importantes

- Cette branche utilise **NestJS 8.x** et **Angular 13.x**
- Les fonctionnalités sont identiques aux versions modernes
- Certaines fonctionnalités avancées peuvent ne pas être disponibles
- Le code source est compatible entre les versions

## 🐛 Dépannage

### Erreur : "Module not found"
- Supprimez `node_modules` et `package-lock.json`
- Réinstallez avec `npm install`

### Erreur : "TypeScript version mismatch"
- Vérifiez que vous utilisez bien Node 14.17.3
- Supprimez `node_modules` et réinstallez

### Erreur de connexion PostgreSQL
- Vérifiez que PostgreSQL est démarré
- Vérifiez les paramètres dans `backend/.env`

