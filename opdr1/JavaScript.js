console.log("Hello World")
console.log(5 + 6)
var a = 10;
if(a > 9) {
    console.log("Hallo a is groter dan 9 hoor");
}
for (var i = 0; i < 10; i++) {
    console.log("i heeft nu de waard " + i);
}

var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw"
}
console.log(mijnauto.kleur);

document.getElementById("grotekop").innerHTML = mijnauto.kleur