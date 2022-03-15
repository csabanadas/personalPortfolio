function menuFunction() {
    let menu = document.getElementById("mobileNavigation")
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}