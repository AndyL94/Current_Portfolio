document.addEventListener("DOMContentLoaded", e => {

    /*============== Montrer / Cacher l'icône menu ==============*/
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /*====== MENU SHOW  ======*/

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    /*====== MENU HIDDEN  ======*/

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /*============== Supprimer MENU MOBILE ==============*/
    const navLink = document.querySelectorAll('.nav_link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        // Quand on clique sur chaque "nav_link", on supprime la classe "show-menu"
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*==================== SCROLL SECTIONS ====================*/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
            } else {
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /*==================== Changer le fond du header  ====================*/
    function scrollHeader() {
        const nav = document.getElementById('header');

        if (this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    /*==================== Montrer SCROLL UP ====================*/
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);

    /*==================== Mode Sombre ====================*/
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'fa-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

    if (selectedTheme) {

        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
    }

    themeButton.addEventListener('click', () => {

        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });

    /*==================== Formulaire ====================*/
    const formulaire = {
        name: document.getElementsByName("nom")[0],
        email: document.getElementsByName("email")[0],
        projet: document.getElementsByName("projet")[0],
        message: document.getElementsByName("message")[0],
        btn: document.getElementById('submit'),
        data: [],

        send() {
            if (this.name.value && this.email.value && this.projet.value && this.message.value) {
                console.log(`Nom : ${this.name.value} 
Email : ${this.email.value}
Projet : ${this.projet.value}
Message : ${this.message.value}`);
                formulaire.data.push(this.name.value, this.email.value, this.projet.value, this.message.value);
                console.table(formulaire.data);
                localStorage.setItem('User', JSON.stringify(formulaire.data));
                alert('Formulaire envoyé');
            }
        }
    };

    formulaire.btn.addEventListener("click", e => {
        e.preventDefault();
        formulaire.send();
    });
});