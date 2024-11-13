function ShowHide(element) {
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle menu visibility
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }

    // Toggle hamburger icon animation (change to X)
    element.classList.toggle("change");
}


<script async src="https://www.googletagmanager.com/gtag/js?id=ID"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'ID');</script>
