document.addEventListener('DOMContentLoaded', function() {
    // Ajouter la liste des livres dynamiquement
    const listeLivres = document.getElementById('liste-livres');
    if (listeLivres) {
        const livres = [
            { titre: "Simon, le criquet artiste", image: "Simon-Criquet-artiste.png" },
            { titre: "Une préparation de Pâques pas comme les autres.", image: "paque.png" },
            { titre: "L'abécédaire du petit Âne gris", image: "abecedaire.jpg" },
            { titre: "Nougatine cherche maison pour Bernard", image: "bernard.jpg" },
            { titre: "Les 5 Brebis, Une amitié à l'épreuve", image: "brebis.jpg" },
            { titre: "Qui veut jouer à cache-cache ?", image: "cache_cache.jpg" },
            { titre: "Super Faustine", image: "faustine.jpg" },
            { titre: "Mathilde et Le Prince-Grenouille", image: "mathilde.jpg" }
        ];

        livres.forEach(livre => {
            const livreElement = document.createElement('div');
            livreElement.className = 'livre';

            const img = document.createElement('img');
            img.src = 'images/' + livre.image;
            img.alt = livre.titre;

            const titre = document.createElement('h3');
            titre.textContent = livre.titre;

            livreElement.appendChild(img);
            livreElement.appendChild(titre);
            listeLivres.appendChild(livreElement);
        });
    }

    
  
    

    // Gérer la soumission du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simuler l'envoi du message
            simulerEnvoiMessage(nom, email, message);
        });
    }
    const bioTexte = document.getElementById('bio-texte');
    if (bioTexte) {
        const biographie = `
            Je m'appelle Myriam, j'ai beaucoup travaillé avec les enfants et plutôt que leur lire des histoires, je préférais raconter celles que j'inventais. Mes 2 garçons les adorent, aussi je me suis dit, pourquoi ne pas les partager avec d'autres enfants ?
            J'ai, dans mes tiroirs, des cahiers remplis d'idées griffonnées qui, grâce aux illustrateurs, se transforment en histoires colorées.
        `;
        bioTexte.innerHTML = biographie;
    }
    function changeBackground(imagePath) {
        document.body.style.backgroundImage = `url('${imagePath}')`;
    }

    changeBackground('images/background.png');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const boutonEnvoi = contactForm.querySelector('button');
            boutonEnvoi.disabled = true;
            boutonEnvoi.textContent = 'Envoi en cours...';

            fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    afficherMessageConfirmation('Votre message a été envoyé avec succès !');
                    contactForm.reset();
                } else {
                    afficherMessageConfirmation("Une erreur s'est produite. Veuillez réessayer.", false);
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                afficherMessageConfirmation("Une erreur s'est produite. Veuillez réessayer.", false);
            })
            .finally(() => {
                boutonEnvoi.disabled = false;
                boutonEnvoi.textContent = 'Envoyer';
            });
        });
    }
    
});


function simulerEnvoiMessage(nom, email, message) {
    // Simuler un délai d'envoi
    const boutonEnvoi = document.querySelector('#contact-form button');
    boutonEnvoi.disabled = true;
    boutonEnvoi.textContent = 'Envoi en cours...';

    setTimeout(() => {
        console.log('Message envoyé :', { nom, email, message });
        
        // Réinitialiser le formulaire
        document.getElementById('contact-form').reset();
        
        // Afficher un message de confirmation
        afficherMessageConfirmation();

        boutonEnvoi.disabled = false;
        boutonEnvoi.textContent = 'Envoyer';
    }, 2000); // Simuler un délai de 2 secondes
}


function afficherMessageConfirmation(message, succes = true) {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.className = 'message-confirmation';
    confirmationDiv.classList.add(succes ? 'succes' : 'erreur');
    confirmationDiv.textContent = message;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(confirmationDiv, form.nextSibling);

    // Faire disparaître le message après 5 secondes
    setTimeout(() => {
        confirmationDiv.style.opacity = '0';
        setTimeout(() => confirmationDiv.remove(), 500);
    }, 5000);
}
function positionnerFooter() {
    var footer = document.querySelector('footer');
    var body = document.body;
    var html = document.documentElement;
    
    var height = Math.max(body.scrollHeight, body.offsetHeight, 
                          html.clientHeight, html.scrollHeight, html.offsetHeight);
    
    if (height > window.innerHeight) {
        footer.style.position = 'static';
    } else {
        footer.style.position = 'relative';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    }
}

// Appeler la fonction au chargement et au redimensionnement de la fenêtre
positionnerFooter();
window.addEventListener('resize', positionnerFooter);

document.addEventListener('DOMContentLoaded', function() {
    const livres = document.querySelectorAll('.livre-link');
    
    livres.forEach(livre => {
        const livreElement = document.createElement('div');
        livreElement.className = 'livre';

        const img = document.createElement('img');
        img.src = 'images/' + livre.image;
        img.alt = livre.titre;

        const titre = document.createElement('h3');
        titre.textContent = livre.titre;

        livreElement.appendChild(img);
        livreElement.appendChild(titre);
        listeLivres.appendChild(livreElement);
        livre.addEventListener('click', function(e) {
          e.preventDefault();
          const livreId = this.getAttribute('href').split('=')[1];
          // Rediriger vers la page de détails avec l'ID du livre
          window.location.href = `detail-livre.html?id=${livreId}`;
        });
      });
  });