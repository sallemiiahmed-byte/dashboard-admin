# Configuration de l'authentification GitHub

## Méthode 1 : Personal Access Token (Recommandé)

### Étape 1 : Créer un Personal Access Token

1. Allez sur GitHub : https://github.com/settings/tokens
2. Cliquez sur "Generate new token" → "Generate new token (classic)"
3. Donnez un nom au token (ex: "dashboard-admin")
4. Sélectionnez les permissions :
   - ✅ `repo` (toutes les permissions du dépôt)
5. Cliquez sur "Generate token"
6. **COPIEZ LE TOKEN IMMÉDIATEMENT** (vous ne pourrez plus le voir après)

### Étape 2 : Utiliser le token

Quand vous faites `git push`, utilisez le token comme mot de passe :
- **Username** : `sallemiiahmed-byte`
- **Password** : `VOTRE_TOKEN_ICI`

### Étape 3 : Stocker le token (optionnel mais pratique)

Vous pouvez configurer Git Credential Manager pour stocker le token :

```bash
git config --global credential.helper manager-core
```

Ensuite, lors du premier push, entrez votre token comme mot de passe, et il sera sauvegardé.

## Méthode 2 : SSH (Alternative)

### Étape 1 : Générer une clé SSH

```bash
ssh-keygen -t ed25519 -C "votre_email@example.com"
```

Appuyez sur Entrée pour accepter l'emplacement par défaut.

### Étape 2 : Ajouter la clé SSH à l'agent

```bash
# Démarrer l'agent SSH
eval "$(ssh-agent -s)"

# Ajouter la clé
ssh-add ~/.ssh/id_ed25519
```

### Étape 3 : Copier la clé publique

```bash
cat ~/.ssh/id_ed25519.pub
```

Copiez tout le contenu affiché.

### Étape 4 : Ajouter la clé sur GitHub

1. Allez sur https://github.com/settings/keys
2. Cliquez sur "New SSH key"
3. Collez votre clé publique
4. Cliquez sur "Add SSH key"

### Étape 5 : Changer le remote en SSH

```bash
git remote set-url origin git@github.com:sallemiiahmed-byte/dashboard-admin.git
```

## Méthode 3 : GitHub CLI (gh)

Si vous avez GitHub CLI installé :

```bash
gh auth login
```

Puis suivez les instructions.

