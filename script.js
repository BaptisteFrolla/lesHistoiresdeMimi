document.addEventListener('DOMContentLoaded', function() {
    // Ajouter la liste des livres dynamiquement
    const listeLivres = document.getElementById('liste-livres');
    if (listeLivres) {
        const livres = [
            { titre: "Simon, le criquet artiste.", image: "Simon-Criquet-artiste.png" },
            { titre: "Une préparation de Pâques pas comme les autres.", image: "paque.png" },
            { titre: "Le Jardin des Secrets", image: "jardin-secrets.jpg" }
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

            console.log('Formulaire soumis :', { nom, email, message });
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }
});