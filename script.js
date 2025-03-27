document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".animate-button");
    btn.addEventListener("mouseenter", function() {
        this.classList.add("btn-glow");
    });
    btn.addEventListener("mouseleave", function() {
        this.classList.remove("btn-glow");
    });
});
