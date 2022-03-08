document.addEventListener("DOMContentLoaded", function (evt) {
    setTimeout(function () {
        document.getElementById("avatar").classList.remove("hidden");
        document.getElementsByClassName("icons")[0].classList.remove("hidden");
    }, 2500);
    var options = {
        strings: [
            "Hi, I'm <span style=\"color: #07baff\">Neven</span>"
        ],
        typeSpeed: 70
    };
    var element = document.getElementById("text");
    // @ts-ignore
    var type = new Typed(element, options);
});
