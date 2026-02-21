const btnTopo = document.querySelector("#btn-topo");

// para mostrar o botão quando descer pelo menos 200px
window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            btnTopo.classList.add("show");
        } else {
            btnTopo.classList.remove("show");
        }
});


btnTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});