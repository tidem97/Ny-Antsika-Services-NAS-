// script.js
function toggleServices() {
    var servicesSection = document.getElementById("services");
    if (servicesSection.classList.contains("hidden")) {
        servicesSection.classList.remove("hidden");
    } else {
        servicesSection.classList.add("hidden");
    }
}
