# **Dashboard Hospitalier**

* Ce projet est un tableau de bord hospitalier développé avec React TypeScript, utilisé pour afficher des indicateurs clés de performance (KPI) et des graphiques comparatifs pour plusieurs hôpitaux. Il permet également de filtrer les données par hôpital, spécialité et période d'hospitalisation.


## **Choix Techniques**

### **1. React TypeScript**

* Le projet a été développé en utilisant React avec TypeScript pour bénéficier de la sécurité de typage statique et améliorer la robustesse du code.
* La gestion des états est principalement effectuée avec des hooks React (useState, useEffect), et le React Router est utilisé pour la navigation entre les différentes pages (HomePage, HospitalPage).

### **2. Styled Components**

* Styled Components est utilisé pour la stylisation des composants, permettant une meilleure modularité du style tout en gardant la flexibilité de l'injection dynamique de styles.
* Chaque composant a ses styles définis dans un fichier styles.tsx, garantissant une séparation claire entre la logique de composant et la stylisation.

### **3. ApexCharts**

* La bibliothèque ApexCharts a été choisie pour créer des graphiques réactifs et interactifs. Elle offre une bonne flexibilité et des options de personnalisation adaptées aux besoins du tableau de bord.
* Les graphiques inclus sont : des graphiques à barres (hospitalisations mensuelles et nombre de médecins par spécialité), et un graphique en camembert (satisfaction des patients).

### **4. Gestion du contexte**

* Les données sont récupérées et partagées à travers le projet en utilisant un Context API personnalisé, garantissant que les composants accèdent facilement aux données nécessaires sans les passer par des props multiples.

### **5. Accessibilité**

* Une attention particulière a été portée à l’accessibilité (ARIA), en veillant à ce que les éléments du tableau de bord soient accessibles aux lecteurs d’écran et à la navigation clavier.
* Les composant graphique inclut des balises aria-label et utilise des techniques de gestion de focus pour améliorer l'expérience des utilisateurs.

## **Installation et Exécution du Projet**

### **Prérequis**

**Node.js**
**npm** ou **yarn**


### **Étapes d'Installation**

#### **1.Cloner le repositoire Github**

```
git clone https://github.com/Qcarvalhooliveira/hospital.git
```

#### **2.Naviguer dans le répertoire du projet**

```
cd hospital
```

#### **3.Installer les dépendances**

Utilisez **npm** ou **yarn** pour installer toutes les dépendances nécessaires au projet.

```
npm install
```

ou

```
yarn install
```

## **Exécution du Projet**

Pour démarrer l'application localement en mode développement :

```
npm start
```

ou

```
yarn start
```

L'application sera accessible sur http://localhost:3000.


## **Structure du Projet**

**/components :** Contient tous les composants principaux comme Charts (les différents graphiques DoctorSpecialtiesChart, HospitalComparisonChart et MonthlyHospitalizationsChart), HomePage, HospitalCard, HospitalPage, Sidebar. Ansi queles styles de chaque composant,

**/context :** Contient le fichier de contexte des données utilisé pour partager les informations de performance des hôpitaux.

**/styles :** Contient les styles globaux définis avec Styled Components.

**/public :** Contient le fichier statique et logo.


## **Fonctionnalités Principales**

* **Tableau de bord :** Affichage des KPI pour chaque hôpital (nombre total de patients, taux de satisfaction, traitements totaux, etc.).
    
* **Graphiques Comparatifs:** Visualisation des hospitalisations mensuelles et des statistiques des médecins par spécialité.

* **Filtres Dynamiques:** Filtrage des données par nom d'hôpital, spécialité médicale, et période d'hospitalisation.

* **Accessibilité:** Utilisation de aria-label et autres attributs ARIA pour assurer l'accessibilité de l'application.


## **Author** :black_nib:

* **Queise Carvalho de Oliveira** - [Linkedin](https://www.linkedin.com/in/queise-carvalho-de-oliveira-50359749/)
