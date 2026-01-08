# Instructions pour publier sur GitHub

## Étape 1 : Créer le dépôt sur GitHub

1. Allez sur https://github.com/sallemiiahmed-byte
2. Cliquez sur "New repository" (ou allez sur https://github.com/new)
3. Nommez le dépôt (ex: `dashboard-admin`)
4. **Ne cochez PAS** "Initialize this repository with a README" (on a déjà un README)
5. Cliquez sur "Create repository"

## Étape 2 : Connecter votre dépôt local à GitHub

Une fois le dépôt créé, GitHub vous donnera des commandes. Utilisez celles-ci :

```bash
# Ajouter le remote (remplacez VOTRE_NOM_REPO par le nom que vous avez choisi)
git remote add origin https://github.com/sallemiiahmed-byte/VOTRE_NOM_REPO.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser le code
git push -u origin main
```

## Alternative : Si vous avez déjà créé le dépôt

Si vous avez déjà créé le dépôt sur GitHub, utilisez ces commandes :

```bash
cd c:\Users\lenovo\Desktop\My-Work\dashboard-admin
git remote add origin https://github.com/sallemiiahmed-byte/VOTRE_NOM_REPO.git
git branch -M main
git push -u origin main
```

## Commandes Git utiles pour la suite

```bash
# Voir le statut
git status

# Ajouter des fichiers modifiés
git add .

# Faire un commit
git commit -m "Description de vos changements"

# Pousser vers GitHub
git push
```

