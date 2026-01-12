# CV Website - Lahcen Amardoul

Un site web professionnel de CV moderne et réactif conçu pour présenter votre expertise en développement logiciel et automatisation industrielle.

## 🎨 Caractéristiques

- ✅ Design moderne et professionnel
- ✅ Entièrement responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec animations
- ✅ Sections complètes : Accueil, Expérience, Formation, Compétences, Projets, Contact
- ✅ Formulaire de contact interactif
- ✅ Performance optimisée
- ✅ Accessibilité web

## 📁 Structure du projet

```
cv-website/
├── index.html      # Fichier principal HTML
├── styles.css      # Styles et mise en page
├── script.js       # Interactivité et animations
└── README.md       # Cette documentation
```

## 🚀 Démarrage rapide

### Option 1 : Ouvrir directement dans un navigateur
1. Double-cliquez sur `index.html`
2. Le site s'ouvrira dans votre navigateur par défaut

### Option 2 : Utiliser un serveur local

**Avec Python 3:**
```bash
cd /path/to/cv-website
python -m http.server 8000
```
Puis ouvrez `http://localhost:8000` dans votre navigateur.

**Avec Python 2:**
```bash
cd /path/to/cv-website
python -m SimpleHTTPServer 8000
```

**Avec Node.js (http-server):**
```bash
npm install -g http-server
cd /path/to/cv-website
http-server
```

**Avec VS Code Live Server:**
1. Installez l'extension "Live Server"
2. Clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

## ✏️ Personnalisation

### Modifier les informations personnelles

Ouvrez `index.html` et modifiez les sections suivantes :

**Coordonnées de contact (bas du formulaire):**
```html
<a href="tel:+212677702781">06-77-70-27-81</a>
<a href="mailto:lahcenamardoul7@gmail.com">lahcenamardoul7@gmail.com</a>
```

**Localisation:**
```html
<p>Hay Yassmina 2 n°142<br>Khouribga, Maroc</p>
```

### Ajouter vos projets

Localisez la section "Projets" et remplacez le contenu de `#projectsGrid`:

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <div class="project-content">
        <h3>Titre de votre projet</h3>
        <p>Description courte du projet...</p>
        <a href="votre-lien" class="project-link">En savoir plus →</a>
    </div>
</div>
```

### Ajouter des liens sociaux

Modifiez la section footer pour ajouter vos liens LinkedIn et GitHub:

```html
<a href="https://linkedin.com/in/votre-profil" target="_blank"><i class="fab fa-linkedin"></i></a>
<a href="https://github.com/votre-username" target="_blank"><i class="fab fa-github"></i></a>
```

### Changer les couleurs

Modifiez les variables CSS dans `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Couleur principale */
    --secondary-color: #764ba2;    /* Couleur secondaire */
    --accent-color: #f093fb;       /* Couleur d'accent */
    /* ... autres variables ... */
}
```

## 🎯 Sections du site

### 1. **Navigation (Navbar)**
- Menu de navigation sticky
- Liens vers chaque section
- Design gradient avec fond dégradé

### 2. **Héro (Hero Section)**
- Titre impactant
- Description professionnelle
- Boutons d'appel à l'action

### 3. **Expérience Professionnelle**
- Cartes avec détails des postes
- Entreprises et responsabilités
- Design avec animations au survol

### 4. **Formation**
- Diplômes et certifications
- Écoles et institutions
- Spécialités et compétences acquises

### 5. **Compétences**
- Développement Full-Stack
- Automatisation & Industrie
- Outils & Méthodologies
- Tags interactifs des compétences

### 6. **Projets**
- Galerie de projets
- Cartes avec images et descriptions
- Liens vers les projets

### 7. **Langues**
- Niveaux de maîtrise
- Langues maternelles

### 8. **Contact**
- Formulaire de contact
- Informations de contact directs
- Liens sociaux

## 🔧 Fonctionnalités JavaScript

- Défilement fluide vers les sections
- Animation des cartes lors du défilement
- Mise à jour du lien actif dans la navbar
- Gestion du formulaire de contact
- Animations au survol

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les appareils :
- **Desktop:** Design complet avec grilles multi-colonnes
- **Tablette:** Adaptation des grilles et espacements
- **Mobile:** Interface mono-colonne optimisée

## 🌐 Déploiement

### GitHub Pages (Gratuit)

1. Créez un repository `username.github.io` sur GitHub
2. Poussez vos fichiers:
```bash
git init
git add .
git commit -m "Initial commit: CV website"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```
3. Accédez à `https://username.github.io`

### Netlify (Gratuit avec domaine gratuit)

1. Connectez-vous à [Netlify](https://netlify.com)
2. Drag & drop le dossier du projet
3. Vous obtenez une URL publique

### Autres hébergeurs
- Vercel
- Azure Static Web Apps
- AWS S3 + CloudFront
- Heroku

## 📧 Formulaire de contact

**Note:** Le formulaire actuel affiche un message d'alerte. Pour fonctionner réellement, vous devez :

**Option 1 : Utiliser Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <!-- Les champs du formulaire -->
</form>
```

**Option 2 : Utiliser Email.js**
```javascript
// Ajouter dans script.js
emailjs.init("YOUR_PUBLIC_KEY");
```

**Option 3 : Backend personnel**
Créer une API sur votre serveur pour traiter les envois.

## 🎨 Personnalisation avancée

### Ajouter Google Fonts
Dans `<head>` du HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

### Ajouter des icônes supplémentaires
Font Awesome est déjà intégré. Trouvez des icônes sur [fontawesome.com](https://fontawesome.com)

### Ajouter du Dark Mode
Modifiez `styles.css` pour créer une version dark et utilisez `prefers-color-scheme`

## 🔒 Sécurité

- ✅ Pas de données sensibles en dur
- ✅ Formulaire côté client (sécuriser avant déploiement)
- ✅ HTTPS recommandé pour le déploiement
- ⚠️ Vérifier les URLs des liens sociaux

## 🐛 Dépannage

**Le site ne s'affiche pas correctement:**
- Vérifiez que tous les fichiers sont dans le même dossier
- Utilisez un serveur local au lieu d'ouvrir en fichier local

**Les styles ne se chargent pas:**
- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Vérifiez que `styles.css` est au bon endroit

**Les animations ne fonctionnent pas:**
- Vérifiez que `script.js` est chargé
- Ouvrez la console (F12) pour voir les erreurs

## 📝 Licence

Ce template est gratuit à utiliser et modifier. Attribution appréciée mais non obligatoire.

## 💡 Conseils de mise à jour

1. Mettez à jour régulièrement votre expérience et vos projets
2. Ajoutez des liens vers vos réalisations
3. Testez sur plusieurs navigateurs
4. Vérifiez l'affichage sur mobile
5. Obtenez des retours

## 📞 Support

Pour toute question ou amélioration, vous pouvez modifier les fichiers directement selon vos besoins.

---

**Bon succès avec votre CV web ! 🚀**
