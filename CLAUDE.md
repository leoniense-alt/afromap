# CLAUDE.md — Site afromap.fr

Ce fichier donne à Claude Code tout le contexte nécessaire pour poursuivre le développement du site vitrine afromap.fr. Mise à jour : 23 octobre 2026.

**Langue de travail : français.** La propriétaire du site, Léonie NSEFOUMOU (fondatrice d'AfroMap), n'est pas développeuse : explique chaque changement en termes simples, sans jargon, et demande avant toute action irréversible.

---

## 1. Le projet en bref

- **AfroMap** : application mobile (en cours de développement par une autre équipe) et site vitrine qui **sélectionnent les meilleures adresses afro-caribéennes**.
- **Lancement de l'application : début 2027**, avec une centaine de commerces référencés.
- **Au lancement** : restaurants, épiceries fines et événements, à Paris et en Île-de-France. Ensuite : toute la France, puis d'autres commerces (coiffure, barbiers, beauté, librairies…), puis l'international.
- **« Afro-caribéen »** désigne l'ensemble des cultures noires : Afrique, Antilles et Caraïbes, toute la diaspora afro-descendante, y compris afro-américaine (soul food, etc.). Ne jamais réduire le terme à l'Afrique seule ni aux Antilles seules.
- **Mission** : faire rayonner les talents afro-caribéens et faciliter la découverte de commerces afro de qualité.
- **Valeurs** : solidarité, excellence, rayonnement de la culture afro-caribéenne.
- **Cible principale** : femmes de 34 à 44 ans, exigeantes, souvent en Seine-et-Marne (77), qui cherchent de bonnes adresses même loin de chez elles.
- **Second public** : les commerçants, invités à candidater.

## 2. Hébergement et dépôts

| Élément | Valeur |
|---|---|
| Dépôt du site | `leoniense-alt/afromap`, branche `main` |
| Hébergement | GitHub Pages, HTTPS actif |
| Domaine | afromap.fr (registrar OVH) |
| Second domaine | afro-map.fr → redirection vers afromap.fr, gérée dans un **dépôt séparé** `leoniense-alt/afro-map-redirection` (index.html, 404.html, CNAME `afro-map.fr`). Ne pas toucher depuis ce dépôt. |
| Ancien dépôt | `afromap-2` supprimé le 20 octobre 2026. `afromap` est le seul dépôt du site. |

**Toute modification poussée sur `main` est publiée en ligne sur afromap.fr.** Règles :
- Travailler sur une **branche dédiée** et montrer les changements avant de fusionner dans `main`.
- Ne jamais supprimer ni renommer de fichiers sans accord explicite de Léonie.
- Ne jamais toucher au fichier `CNAME` du dépôt.

## 3. Structure du site

```
/                     → index.html (accueil, public utilisatrices et utilisateurs) + sitemap.xml
/commercants/         → index.html (page commerçants)
mentions légales      → actuellement intégrées au site (pages séparées prévues, voir §9)
404.html              → page d'erreur
fonts/                → polices auto-hébergées
```

Vérifier la structure réelle du dépôt avant toute modification : l'arborescence ci-dessus reflète ce qui est connu, pas forcément l'état exact.

**Version en ligne : « VERSION FINALE 2 » du 23 octobre 2026**, constatée en ligne le 23 octobre au soir (FAQ « Vos questions sur AfroMap » sur l'accueil, FAQ commerçants avec « Et après les 100 premiers commerces ? »). C'est la version de référence : partir de ce qui est dans le dépôt. Une copie existe aussi sur l'ordinateur de Léonie (`OneDrive\Bureau\Application Mobile AfroMap\Site afromap.fr\2026-10-23 - Version finale 2 (à déposer sur GitHub)\`).

Vérifications encore à faire : apparition du bandeau de cookies, présence du sitemap.xml daté du 23 octobre à la racine.

## 4. Contenu de la version du 23 octobre (ce qui doit être en ligne)

### Accueil
- Titre (balise `<title>`) : « AfroMap · Adresses afro-caribéennes à Paris et en IDF, dès 2027 » (63 caractères, choisi par Léonie le 23 octobre 2026 ; retirer « , dès 2027 » après le lancement). Le même titre doit figurer dans la balise `<title>` et dans le script qui change le titre selon la partie affichée (fonction `showView`).
- Meta description sous 155 caractères.
- FAQ utilisatrices de 8 questions, section « Vos questions sur AfroMap », avec balisage `FAQPage` (JSON-LD).
- Parle encore du label KOUDMEN et des co-constructeurs côté utilisateurs : laissé tel quel volontairement.

### Page commerçants
- Titre : « Commerçants : rejoignez la sélection AfroMap ».
- Offre de lancement (voir §6). Nouvelle question FAQ « Et après les 100 premiers commerces ? ».
- **Aucune mention** des 30 co-constructeurs, des 6 mois offerts sur 12, ni du label KOUDMEN sur cette page (règle : une seule demande à la fois envers les commerçants).
- Critères de sélection : qualité, authenticité, accueil.
- Balisage `FAQPage`.

### Les deux pages
- Formulation « Paris et l'Île-de-France » (jamais « Paris et sa banlieue »).
- Données structurées `Organization` : description, date de création, fondatrice reliée à son LinkedIn, `sameAs` vers les réseaux (§7).
- sitemap.xml daté du 23 octobre 2026.

## 5. Mesure d'audience et cookies (CNIL)

- **Google Analytics 4**, identifiant `G-3KE55SE2VF`, sur les deux pages.
- **Bandeau de consentement obligatoire** :
  - boutons « Refuser » et « Accepter » **de même poids visuel** ;
  - GA chargé **uniquement après « Accepter »** (aucun script Google avant) ;
  - choix mémorisé 6 mois ;
  - lien « Gérer les cookies » dans le pied de page pour revenir sur son choix ;
  - durée des cookies : 13 mois ; signaux publicitaires désactivés.
- Politique de confidentialité : partie « Cookies et mesure d'audience », Google Analytics listé dans les prestataires, date du 23 octobre 2026.
- Ne jamais ajouter d'autre traceur (pixel Meta, TikTok, etc.) sans bandeau mis à jour et accord de Léonie.

## 6. Offre commerçants (texte de référence)

- Candidature gratuite. Rien à gérer : AfroMap crée la fiche du commerce.
- **Offre de lancement réservée aux 100 premiers commerces sélectionnés** : 3 premiers mois offerts, sans obligation de continuer, à compter de l'ouverture de l'application au public ; puis **49 € par mois, sans engagement**.
- Mention obligatoire près du prix : « TVA non applicable, art. 293 B du CGI ».
- **Encore à décider par Léonie (ne rien inventer)** : conditions après les 100 premiers, point de départ exact des 3 mois offerts, tarif des organisateurs d'événements.

## 7. Liens et formulaires

### Réseaux (pied de page et `sameAs`)
- Instagram : https://www.instagram.com/afromap_app
- TikTok : https://www.tiktok.com/@afromap_app
- Facebook : https://www.facebook.com/profile.php?id=61595257712928 (un nom d'utilisateur `afromap.app` est prévu : le lien changera)
- LinkedIn : https://www.linkedin.com/company/afromap-fr (lien conservé tel quel, décision du 20 octobre)
- WhatsApp : lien existant, inchangé

### Formulaires Tally (intégrés en fenêtre dans le site)
**Ne jamais changer ces identifiants** : le site les appelle par leur adresse.
- Liste d'attente « Rejoignez-nous en avant-première » : `rjzMr5`
- Candidature « Proposer mon commerce » : `b5bQ42`
- « Recommander une adresse ou un événement » : `XxZPBd`

### Contact
- contact@afromap.fr

## 8. Identité visuelle (charte à respecter strictement)

| Rôle | Couleur |
|---|---|
| Principale | violet `#5E2A8C` |
| Accent | rose `#D12864` |
| Excellence (rare) | or `#E2B04F` |
| Fond clair | crème `#FBF6F3` |
| Texte foncé | encre `#24132B` |

- **Polices** : Bricolage Grotesque graisse 800 pour les titres ; Figtree pour les textes (licence SIL OFL, auto-hébergées).
- **Logo** : monogramme AM avec une épingle rose dans le creux du M. Sous 32 px, l'épingle seule. Sur fond violet : lettres crème, épingle rose. Sur fond crème : lettres violettes, épingle rose.
- **Ton** : chaleureux, fier, sobre et chic.
- **Interdits** : carte de l'Afrique, motifs wax plaqués, palmiers, émoji 🌍. Ne jamais dénigrer les commerces afro (parler de « bonnes adresses », pas des défauts des autres).

## 9. Règles de contenu (obligatoires)

1. **Catégories** : jusqu'à nouvel ordre, citer uniquement « restaurants · épiceries fines · événements ». Ne pas promettre coiffure, barbiers, beauté, etc. (publicité trompeuse). Ces univers peuvent seulement être annoncés **au futur**.
2. **Pas de limite à Paris** : écrire « lancement à Paris et en Île-de-France » ou « à commencer par Paris et l'IDF ». Jamais de ville dans les noms de fichiers, identifiants ou URL.
3. **Aucun chiffre, témoignage ou commerce inventé.** Les preuves sociales (compteur, témoignages) existent dans le code mais restent **masquées** tant qu'il n'y a pas de données réelles et datées. Chiffre autorisé : « plus de 110 réponses » à l'enquête (formuler « parmi les personnes interrogées », pas de statistique nationale).
4. **RGPD** : ne jamais collecter ni afficher l'origine des personnes (donnée sensible, art. 9). Pas de badge « Black-owned » sans validation juridique.
5. **Mises en avant** (futur) : distinguer clairement une sélection éditoriale gratuite d'une mise en avant payante, toujours signalée « sponsorisée » (art. L111-7 du Code de la consommation). Ne pas communiquer sur un badge « Coup de cœur » avant le lancement.
6. Français impeccable, écriture inclusive quand c'est pertinent (« inscrit·e », « intéressé·es »).

## 10. Écarts connus à corriger (demander à Léonie avant de trancher)

- **Ô Petit Club Africain** est présenté comme « premier partenaire » alors que le contrat **n'est pas signé** : retirer ou reformuler cette mention.
- **Photo de la verrière** : montre probablement des œuvres de l'artiste ELKA, sans accord écrit. À retirer ou remplacer avant d'envoyer des restaurateurs vers le site.

Petite correction typographique en attente : l'espace avant « ? » est irrégulier dans la FAQ commerçants (« coûte ? » mais « candidater? »). Harmoniser avec une espace insécable fine (`&#8239;`) avant « ? », « ! », « : », « ; » sur tout le site.

## 11. Travaux SEO prévus (avant le lancement)

Ordre de priorité indicatif, à valider avec Léonie :
1. Mentions légales et politique de confidentialité sur des **pages séparées**.
2. Pages dédiées aux labels / rubriques Kazi, KOUDMEN, Nyota (demander leur contenu à Léonie, ne pas l'inventer).
3. Sélections par cuisine et par ville (au lancement).
4. Une page web par commerce référencé (au lancement).
5. Images converties en WebP.
6. Profil public de Léonie relié au site.

Après chaque mise en ligne : vérifier la page en ligne, le temps réel de Google Analytics (après avoir cliqué « Accepter »), et rappeler à Léonie de renvoyer le sitemap dans la Google Search Console (propriété déjà vérifiée).

## 12. Informations légales (pour les mentions légales uniquement)

- Entreprise individuelle, nom commercial AfroMap, micro-entreprise.
- RCS Paris 811 345 594 · SIRET 811 345 594 00022.
- Siège (domiciliation) : 52, rue des Mathurins, 75008 Paris.
- Franchise en base de TVA (art. 293 B du CGI).
- Ne pas ajouter d'autres informations personnelles sur la fondatrice.

## 13. Pièges connus

- Windows masque les extensions : un fichier peut s'appeler `index.html.html`. Vérifier les noms exacts.
- Le dossier des commerçants s'écrit `commercants` (sans cédille) dans l'URL et le dépôt.
- Un aperçu d'un fichier `index.html` seul ne suit pas les liens vers les autres pages : c'est normal.
