function calculatrice() {
    let premierNombre = parseFloat(prompt("Entrez le premier nombre :"));
    let operateur = prompt("Entrez l'opérateur (+, -, *, /) :");
    let deuxiemeNombre = parseFloat(prompt("Entrez le deuxième nombre :"));

    let resultat;

    switch (operateur) {
        case '+':
            resultat = premierNombre + deuxiemeNombre;
            break;
        case '-':
            resultat = premierNombre - deuxiemeNombre;
            break;
        case '*':
            resultat = premierNombre * deuxiemeNombre;
            break;
            case '/':
    }

    console.log(`Votre Résultat est : ${resultat}`);
}

calculatrice();
