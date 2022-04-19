document.addEventListener("DOMContentLoaded", e => {

    /*============== MENU SHOW AND HIDDEN ==============*/
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /*====== MENU SHOW  ======*/
    /* Validate if constant exists */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    /*====== MENU HIDDEN  ======*/
    /* Validate if constant exists */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /*============== REMOVE MENU MOBILE ==============*/
    const navLink = document.querySelectorAll('.nav_link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        // Quand on clique sur chaque "nav_link", on supprime la classe "show-menu"
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*============== ACCORDION SKILLS ==============*/
    const skillsContent = document.getElementsByClassName('skills_content'),
          skillsHeader = document.querySelectorAll('.skills_header');

    function toggleSkills() {
        let itemClass = this.parentNode.className;

        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills_content skills_close';
        }
        if (itemClass === 'skills_content skills_close') {
            this.parentNode.className = 'skills_content skills_open';
        }
    }
    skillsHeader.forEach(el => {
        el.addEventListener('click', toggleSkills);
    });

    /*============== EXPERIENCE TABS ==============*/
    const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('experience_active');
            });
            target.classList.add('experience_active');

            tabs.forEach(tab => {
                tab.classList.remove('experience_active');
            });
            tab.classList.add('experience_active');
        });
    });
});