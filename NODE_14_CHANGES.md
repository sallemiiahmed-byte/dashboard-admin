# 🔄 Changements pour Node.js 14.17.3

Cette branche (`node-14`) contient les adaptations nécessaires pour utiliser Node.js 14.17.3.

## 📦 Versions Downgradées

### Backend (NestJS)
- **NestJS** : `10.x` → `8.4.7`
- **TypeORM** : `0.3.17` → `0.2.45`
- **TypeScript** : `5.1.3` → `4.7.4`
- **@nestjs/config** : `3.0.0` → `1.1.7`
- **Jest** : `29.5.0` → `27.5.1`

### Frontend (Angular)
- **Angular** : `16.x` → `13.3.11`
- **Angular Material** : `16.x` → `13.3.9`
- **Angular CDK** : `16.x` → `13.3.9`
- **TypeScript** : `5.0.2` → `4.6.4`
- **Zone.js** : `0.13.0` → `0.11.8`
- **RxJS** : `7.8.0` → `7.5.7`

### TypeScript Config
- **Target** : `ES2022` → `ES2020`
- **Module** : `ES2022` → `ES2020`

## ⚠️ Différences de Compatibilité

### NestJS 8 vs 10
- Certaines fonctionnalités avancées peuvent ne pas être disponibles
- La syntaxe reste largement compatible
- Les guards et interceptors fonctionnent de la même manière

### Angular 13 vs 16
- Pas de support pour les standalone components (introduits en Angular 14+)
- Les modules sont obligatoires
- Certaines fonctionnalités Material peuvent différer légèrement

## 🚀 Installation

1. **Assurez-vous d'utiliser Node.js 14.17.3** :
   ```bash
   node --version  # Doit afficher v14.17.3
   ```

2. **Supprimez les node_modules existants** :
   ```bash
   rm -rf backend/node_modules frontend/node_modules
   rm backend/package-lock.json frontend/package-lock.json
   ```

3. **Installez les dépendances** :
   ```bash
   cd backend
   npm install
   
   cd ../frontend
   npm install
   ```

4. **Lancez le projet** :
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run start:dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

## 📝 Notes

- Cette branche est maintenue séparément de `main` et `develop`
- Les fonctionnalités sont identiques, seule la version des dépendances change
- Pour revenir aux versions modernes, basculez sur la branche `develop` ou `main`

