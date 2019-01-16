var plaatjes = [1,2,3,4];
var teller = 0;
var slideholder1 = document.getElementById("slideholder1");
var slideholder2 = document.getElementById("slideholder2");
var slideholder3 = document.getElementById("slideholder3");

slideholder1.style.backgroundImage = "url('img/ogen/a1.jpg')";
slideholder2.style.backgroundImage = "url('img/neus/b1.jpg')";
slideholder3.style.backgroundImage = "url('img/mond/c1.jpg')";

slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('img/ogen/a" + getOgen() +".jpg')";

});
slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('img/neus/b" + getNeus() +".jpg')";

});
slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('img/mond/c" + getMond() +".jpg')";

});

function getMond() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    return teller;
}function getOgen() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    return teller;
}function getNeus() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    return teller;
}