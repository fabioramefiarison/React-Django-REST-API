
# **User Management System**

Une application de gestion des utilisateurs construite avec **Django** (Backend) et **React** (Frontend). Cette application permet de **créer**, **lire**, **mettre à jour** et **supprimer** (CRUD) des utilisateurs avec une interface utilisateur conviviale.

---

## **Fonctionnalités**

- 🔍 **Liste des utilisateurs** : Affiche tous les utilisateurs.
- ➕ **Ajouter des utilisateurs** : Ajoutez de nouveaux utilisateurs avec leur prénom, nom et email.
- ✏️ **Modifier les utilisateurs** : Mettez à jour les informations d'un utilisateur existant.
- 🗑️ **Supprimer des utilisateurs** : Supprimez un utilisateur de la liste.
- 🎨 **Interface stylée** : Interface utilisateur moderne et épurée avec CSS.

---

## **Technologies utilisées**

### **Backend**
- [Django](https://www.djangoproject.com/) : Framework web Python.
- [Django REST Framework](https://www.django-rest-framework.org/) : Gestion de l'API REST.

### **Frontend**
- [React](https://reactjs.org/) : Framework JavaScript pour construire des interfaces utilisateur.
- [Axios](https://axios-http.com/) : Client HTTP pour les appels API.

### **Autres outils**
- CSS pour le stylisme.
- SQLite (par défaut avec Django) comme base de données.

---

## **Installation et utilisation**

### **1. Clonez le dépôt**
```bash
git clone https://github.com/votre-utilisateur/nom-du-repo.git
cd nom-du-repo
```

---

### **2. Backend : Django**

#### a. Activez l'environnement virtuel
```bash
python -m venv env
source env/bin/activate # Sur Windows, utilisez env\Scripts\activate
```

#### b. Installez les dépendances
```bash
pip install -r requirements.txt
```

#### c. Appliquez les migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

#### d. Démarrez le serveur backend
```bash
python manage.py runserver
```

---

### **3. Frontend : React**

#### a. Accédez au répertoire `frontend`
```bash
cd frontend
```

#### b. Installez les dépendances
```bash
npm install
```

#### c. Lancez le serveur frontend
```bash
npm start
```

---

### **4. Accès à l'application**

- **Frontend** : Accédez à l'application via [http://localhost:3000](http://localhost:3000).
- **Backend** : L'API est accessible via [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api).

---

## **Structure du projet**

```plaintext
project/
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── models.py         # Modèles des utilisateurs
│   │   ├── serializers.py    # Serializers pour les données utilisateur
│   │   ├── views.py          # Vues CRUD pour l'API
│   │   ├── urls.py           # Routes API
│   ├── settings.py           # Configuration du backend
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddUser.js    # Formulaire d'ajout d'utilisateur
│   │   │   ├── UpdateUser.js # Formulaire de modification
│   │   │   ├── UserList.js   # Liste des utilisateurs
│   │   ├── styles/           # Fichiers CSS
│   ├── public/
│   │   ├── index.html        # Fichier HTML principal
│   ├── package.json          # Dépendances React
├── db.sqlite3                # Base de données SQLite
├── manage.py                 # Script de gestion Django
├── README.md                 # Documentation du projet
```

---


## **Contributeurs**

 
[fabio](https://github.com/fabioramefiarison)


