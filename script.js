document.querySelector('nav ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }
});

// Fonction pour animer le défilement vers le haut
function scrollToTop(scrollDuration) {
    const scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

// Événement de clic pour le bouton
document.getElementById('backToTop').addEventListener('click', function() {
    scrollToTop(500); // 500 ms pour le défilement total
});

// Gestion de l'affichage du bouton
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        document.getElementById('backToTop').style.display = 'block';
    } else {
        document.getElementById('backToTop').style.display = 'none';
    }
});

