const languageSelect = document.querySelector(".navbar .nav-item.dropdown .dropdown-menu");

languageSelect.addEventListener("mousedown", function (event) {
    console.log("Click event triggered");
    const selectedLanguage = event.target.getAttribute("data-lang");
    if (selectedLanguage) {
        const contentUrl = `/languages/${selectedLanguage}/index.html`;

        const iframe = document.createElement('iframe');
        iframe.src = contentUrl;
        iframe.style.width = '100%';
        iframe.style.height = '100vh';
        document.body.innerHTML = ''; // Limpia el contenido actual
        document.body.appendChild(iframe);
    }
});