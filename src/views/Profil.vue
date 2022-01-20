<template>
    <div class="profil">
        <div class="e-titre">
            <p>Bienvenue à toi Théo,</p>
            <p>Nous sommes ravis de te retrouver</p>
        </div>
        <div class="c-monProfil">
            <div class="c-contenu">
                <div class="c-introduction">
                    <h3 class="c-introduction__h3">Mon profil</h3>
                    <p>Ici tu vas pouvoir modifier tes informations personnels. </p>
                    <p>Nous te promettons de les garder rien que pour nous.</p>
                </div>
                <div class="c-photo">
                    <div class="e-photo">
                        <img class="e-photo__img" src="#" alt="Photo d'un jeune homme">
                    </div>
                    <button class="e-fullbutton">Modifier la photo</button>
                    <button class="e-emptybutton">Supprimer la photo</button>
                </div>
                <div class="c-formulaire">
                    <form class="e-formulaire" method="post">
                        <ul>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Prénom</p>
                                <input class="e-formlist__input" type="text" name="Prénom">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Nom</p>
                                <input  class="e-formlist__input" type="text" name="Nom">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Pseudo</p>
                                <input class="e-formlist__input" type="text" name="Pseudo">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">E-mail</p>
                                <input class="e-formlist__input" type="text" name="E-mail">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Téléphone</p>
                                <input class="e-formlist__input" type="text" name="Téléphone">
                            </li>
                        </ul>
                    </form>
                    <button class="e-emptybutton">Sauvegarder</button>
                </div>
            </div>
        </div>
        <div class="c-motDePasse">
            <div class="c-contenu">
                <div class="c-introduction">
                    <h3 class="c-introduction_h3">Mot de Passe</h3>
                    <p>Ici tu vas pouvoir modifier ton mot de passe </p>
                    <p>Ne l'oublie surtout pas !</p>
                </div>
                <div class="c-formulaire">
                    <form method="post">
                        <ul>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Mot de passe actuel</p>
                                <input class="e-formlist__input" type="text" name="MDPactuel">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Nouveau mot de passe</p>
                                <input class="e-formlist__input" type="text" name="NvMDP">
                            </li>
                            <div class="e-formlist">
                                <p class="e-formlist__titre">Retaper le mot de passe</p>
                                <input class="e-formlist__input" type="text" name="RetaperMDP">
                            </div>
                        </ul>
                    </form>
                    <button class="e-emptybutton">Sauvegarder</button>
                </div>
            </div>
        </div>
        <div class="c-adresseDeLivraison">
            <div class="c-contenu">
                <div class="c-introduction">
                    <h3 class="c-introduction_h3">Adresse de livraison</h3>
                    <p>Ici tu vas pouvoir modifier tes adresses de livraisons </p>
                </div>
                <div class="">
                    <button class="e-emptybutton">
                        Ajouter une adresse
                    </button>
                    <div class="e-rubrique">
                        <div class="e-rubrique__haut">
                            <div>
                                <p>Théo Legrand</p>
                            </div>
                            <div>
                                <p>Adresse par défaut</p>
                            </div>
                        </div>
                        <div class="e-rubrique__bas">
                            <p>36 rue de la Liberté</p><br>
                            <p>Montbéliard, Franche-Comté, 25200</p><br>
                            <p>France</p><br>
                        </div>
                        <button class="e-emptybutton">Modifier</button>
                        <button class="e-emptybutton">Effacer</button>
                    </div>
                    <div class="e-rubrique">
                        <div class="e-rubrique__haut">
                            <div>
                                <p>Théo Legrand</p>
                            </div>
                        </div>
                        <div class="e-rubrique__bas">
                            <p>86 rue de la Concorde</p><br>
                            <p>Lens, Haut de France, 62300</p><br>
                            <p>France</p><br>
                        </div>
                        <button class="e-emptybutton">Modifier</button>
                        <button class="e-emptybutton">Effacer</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-ajouterUneAdresse">
            <div class="c-contenu">
                <div class="c-introduction">
                    <h3 class="c-introduction_h3">Ajouter une adresse de livraison</h3>
                    <p>Ici tu vas pouvoir ajouetr une nouvelle adresse de livraison</p>
                </div>
                <button class="e-emptybutton">Utiliser l'emplacement actuel</button>
                <div class="c-formulaire">
                    <form method="post">
                        <ul>
                            <li class="e-formlist__adresse">
                                <p class="e-formlist__titre">Adresse</p>
                                <input class="e-formlist__input" type="text" name="Adresse">
                                <input class="e-formlist__input" type="text" name="Adresse">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Code postal</p>
                                <input class="e-formlist__input" type="text" name="Code postal">
                            </li>
                            <li class="e-formlist">
                                <p class="e-formlist__titre">Ville</p>
                                <input class="e-formlist__input" type="text" name="Ville">
                            </li>
                        </ul>
                    </form>
                    <input type="checkbox" id="e-chexbox" name="Défaut">
                    <label for="e-chexbox">Faire de cette adresse mon adresse par défaut</label><br>
                    <button class="e-emptybutton">Ajouter</button>
                </div>
            </div>
        </div>
        <div class="c-mesPrecommandes">
            <div class="c-contenu">
                <div class="c-introduction">
                    <h3 class="c-introduction_h3">Mes précommandes</h3>
                    <p>Ici tu vas pouvoir retrouver toutes tes précommandes</p>
                </div>
                <div class="c-précommandes">
                    <div class="e-chaussures">
                        <img src="#" alt="Photo d'une basquette">
                    </div>
                    <div class="e-informations">
                        <p><strong>Nom de la basket</strong></p>
                        <p>La Bask'It</p>
                        <p><strong>Taille de la basket</strong></p>
                        <p>40</p>
                        <p><strong>Date de livraison estimé</strong></p>
                        <p>janvier 2022</p>
                    </div>
                    <button class="e-emptybutton">Télécharger la facture</button>
                </div>
            </div>
        </div>
    </div>
    </template>