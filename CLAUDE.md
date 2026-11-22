# CLAUDE.md — Site afromap.fr

Contexte pour poursuivre le développement du site afromap.fr. Mise à jour : 22 novembre 2026 (refonte vers la nouvelle identité).

**Langue de travail : français.** La propriétaire du site, Léonie NSEFOUMOU (fondatrice d'AfroMap), n'est pas développeuse : explique chaque changement simplement et demande avant toute action irréversible.

---

## 1. Le projet

- **AfroMap** prépare une sélection de bonnes adresses afro-caribéennes à Paris et en Île-de-France.
- **Lancement : début 2027, en commençant exclusivement par les restaurants.** Épiceries, salons de coiffure et de beauté, événements : plus tard, à annoncer uniquement au futur, sans date.
- **Signature officielle** : « Les bonnes adresses, choisies avec exigence. »
- **Émotions** : confiance, clarté, excellence, authenticité. **Valeurs** : solidarité, excellence, rayonnement.
- **Public principal** : consommatrices et consommateurs (vouvoiement, décision du 22 novembre 2026). **Second public** : restaurateurs (vouvoiement).
- Ne jamais afficher les prénoms des personas (Sarah, Nadia) sur le site.

## 2. Architecture de l'offre (décisions de novembre 2026)

- **Sélection AfroMap** : seul label. Attribué selon cinq critères (grille complète publiée avant le lancement : ne pas écrire « critères publics » avant), ne s'achète pas, peut être retiré. Critères restaurants : qualité de la cuisine, accueil, clarté des prix, cadre et propreté, régularité de l'expérience. Sur chaque fiche : bloc « Pourquoi nous la recommandons », sans autre badge.
- **Référencée** : fiche gratuite, créée et tenue à jour par le commerce. Pas d'évaluation. Toujours affichée séparément de la Sélection.
- **Offre professionnelle** : en préparation. **Aucun prix affiché** (tarifs non validés). Ne donne jamais accès au label.
- **Commerçants fondateurs** (seul nom officiel) : statut de co-construction (entretiens, tests, retours). Les 10 premiers de chaque type de commerce (au lancement : les 10 premiers restaurants) ont 3 mois de l'offre professionnelle offerts, sans engagement. Ne donne pas accès au label.
- **Abandonnés** (ne plus jamais afficher) : labels Kazi (THAMANI, HALISI, UBUNIFU, SAFI, TERANGA, BORA), KOUDMEN, Nyota, QR codes et « avis vérifiés », badge Black-owned, prix de 49 €, « 100 premiers commerces », « meilleures adresses », « nous créons votre fiche ».

## 3. Hébergement et dépôts

| Élément | Valeur |
|---|---|
| Dépôt du site | `leoniense-alt/afromap`, branche `main` |
| Hébergement | GitHub Pages, HTTPS actif |
| Domaine | afromap.fr (registrar OVH) |
| Second domaine | afro-map.fr → redirection, dépôt séparé `leoniense-alt/afro-map-redirection`. Ne pas toucher depuis ce dépôt. |

**Toute modification poussée sur `main` est publiée immédiatement sur afromap.fr.** Travailler sur une branche dédiée, montrer un aperçu, fusionner seulement après accord explicite de Léonie. Ne jamais toucher au fichier `CNAME`. Ne jamais supprimer ni renommer de fichiers sans accord.

## 4. Structure du site (depuis la refonte)

```
/                    index.html            accueil (public, vouvoiement)
/commercants/        index.html            espace commerçants (vouvoiement)
/mentions-legales/   index.html
/confidentialite/    index.html
404.html
assets/site.css      styles communs (charte)
assets/site.js       formulaires Tally, mesure, cookies, redirection des anciens liens
assets/img/          logo v1.2 (SVG)
fonts/               polices auto-hébergées
og-image.jpg, apple-touch-icon.png, sitemap.xml, robots.txt
```

- Les anciens liens `/#confidentialite` et `/#mentions-legales` sont redirigés par `assets/site.js` vers les nouvelles pages (le sondage ou d’anciens partages peuvent encore les utiliser).
- Les photos de `photos/` ne sont pas affichées : ne pas les réutiliser. Les trois photos de `assets/img/photos/` (Ô Petit Club Africain) sont affichées avec la mention « Photos : © Ô Petit Club Africain » et ne valent pas sélection. À retirer au plus tard 30 jours après le lancement, sauf nouvel accord.
- Après une modification de `site.css` ou `site.js`, changer le numéro `?v=` dans les pages pour forcer la mise à jour des navigateurs.

## 5. Formulaires Tally

**Ne jamais changer ces identifiants.**
- Liste d'attente « Rejoignez-nous en avant-première » : `rjzMr5` (préremplissage prévu via les paramètres `prenom` et `email`).
- Candidature « Proposer mon commerce » : `b5bQ42`
- « Recommander une adresse ou un événement » : `XxZPBd`
- Sondage « Vos sorties, vos bonnes adresses » : `LDZDoO`

Les paramètres `utm_source`, `utm_medium`, `utm_campaign` de l'adresse visitée sont transmis aux formulaires.

## 6. Mesure d'audience et cookies (CNIL)

- Google Analytics 4 `G-3KE55SE2VF`, chargé **uniquement après « Accepter »**. Boutons « Refuser » et « Accepter » de même poids. Choix mémorisé 6 mois. Lien « Gérer les cookies » en pied de page. Cookies 13 mois, signaux publicitaires désactivés.
- Événement mesuré : `ouverture_formulaire` (paramètres `formulaire`, `emplacement`).
- Ne jamais ajouter d'autre traceur sans bandeau mis à jour et accord de Léonie.

## 7. Charte : brand kit « Final et vérifié » (affiché v1.2, 22 novembre 2026)

| Rôle | Couleur |
|---|---|
| Principale (boutons, bandeaux) | violet `#5E2A8C` (petits textes : `#4A1F70`) |
| Fond | crème `#FBF6F3` |
| Texte | encre `#24132B` (secondaire : `#4A3B52`) |
| Excellence, détails seulement | or `#E2B04F` |
| Accent rare, formes uniquement | rose `#D12864` (jamais de texte rose sur violet, jamais dans le logo) |

- Polices : Bricolage Grotesque 800 (titres) et 600 (sous-titres), Figtree (textes).
- Badge or : réservé à la Sélection, jamais à une offre.
- En-tête : toujours le SVG horizontal officiel, jamais le nom retapé.
- Logo v1.2 : M à deux sommets avec un point or (`assets/img/`). Ne pas le modifier.
- Interdits : clichés folkloriques (carte de l'Afrique, wax plaqué, palmiers), images générées présentées comme de vrais lieux, superlatifs invérifiables.

## 8. Règles de contenu

1. Aucun chiffre, témoignage ou commerce inventé. Les fiches d'aperçu portent toujours le badge « Exemple ».
2. Aucune fonctionnalité future présentée comme disponible : écrire « prévu à l'ouverture ».
3. RGPD : ne jamais collecter ni afficher l'origine des personnes.
4. Mises en avant payantes (futur) : toujours signalées « sponsorisé » (art. L111-7 du Code de la consommation).
5. Français impeccable, écriture inclusive quand c'est pertinent, espace fine insécable avant ? ! : ;.

## 9. Informations légales

Entreprise individuelle, nom commercial AfroMap, micro-entreprise · RCS Paris 811 345 594 · SIRET 811 345 594 00022 · 52, rue des Mathurins, 75008 Paris · TVA non applicable, art. 293 B du CGI. Hébergeur : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis, +1 (415) 735-4488.

## 10. Après chaque mise en ligne

Vérifier la page en ligne, le temps réel de Google Analytics (après « Accepter »), et rappeler à Léonie de renvoyer le sitemap dans la Google Search Console.
