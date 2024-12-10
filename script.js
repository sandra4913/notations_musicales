/*Création du titre principal*/
const titre = document.createElement('h1');
document.body.appendChild(titre);
titre.textContent = 'Sélectionnez une note de musique pour découvrir son équivalence américaine';

/*Création du formulaire et de la balise <select>*/
const form = document.createElement('form');
document.body.appendChild(form);
//On ajoute l'attribut 'action' au formulaire, auquel on passe l'URL du fichier PHP
form.setAttribute('action', 'index.php');
const select = document.createElement('select');
form.appendChild(select);

/*Création du tableau associatif des notations classiques et américaines*/
const notations = {
    '': '', 'DO': 'C', 'RE': 'D', 'MI': 'E', 'FA': 'F', 'SOL': 'G', 'LA': 'A', 'SI': 'B',
}

/*Création des options du formulaire*/
for (let key in notations) {
    const option = document.createElement('option');
    select.appendChild(option);
    option.textContent = key;
    select.setAttribute('name', 'note_classique');
}

/*Ecouteur d'événement pour formuler la requête Ajax et récupérer le résultat via PHP*/
form.addEventListener('change', async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const requestBody = new URLSearchParams(data);
    if (!form.checkValidity()) {
        return;
    }
    let url = 'index.php';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestBody,
    });
    if (response.ok) {
        console.log(response);
        let codeHtml = await response.text();
        const div = document.getElementById('div');
        div.innerHTML = codeHtml;
        console.log(div);
    }
    else {
        console.debug(response);
    }

});