document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function () {
        var sections = document.querySelectorAll("section");
        sections.forEach(function (section) {
            var top = section.offsetTop - 100;
            var id = section.getAttribute("id");

            if (window.scrollY >= top) {
                document.querySelectorAll('.navbar-nav .nav-item .nav-link').forEach(function (link) {
                    link.classList.remove("active");
                });

                document.querySelector('.navbar-nav .nav-item .nav-link[href="#' + id + '"]').classList.add("active");
            }
        });
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Selecciona todos los enlaces en tu página
    const links = document.querySelectorAll('a');

    // Itera sobre cada enlace
    links.forEach(link => {
        // Verifica si el enlace apunta a un sitio externo
        if (link.hostname !== window.location.hostname) {
            // Agrega el atributo target="_blank" para abrir en nueva pestaña
            link.setAttribute('target', '_blank');
        }
    });

});





