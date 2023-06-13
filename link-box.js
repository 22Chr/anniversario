function openNav() {
    if (x.matches) {
    document.getElementById("myNav").style.width = "100%";
    } else {
    document.getElementById("myNav").style.width = "25%";
    }
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
var x = window.matchMedia("(max-width: 1000px)")    