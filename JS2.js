var kepeim = [{
    kepEleresUt: "kepek/1.jpg",
    kepCim: "rotterdam",
    kepAr: 3660,
},
{
    kepEleresUt: "kepek/2.jpg",
    kepCim: "buddha cica",
    kepAr: 56000,
},
{
    kepEleresUt: "kepek/3.jpg",
    kepCim: "living cica",
    kepAr: 9600,
}, {
    kepEleresUt: "kepek/4.jpg",
    kepCim: "new york stairs on a rainy and stormy day with cica",
    kepAr: 15000,
}, {
    kepEleresUt: "kepek/5.jpg",
    kepCim: "driplets on a leaf",
    kepAr: 90000,
}, {
    kepEleresUt: "kepek/6.jpg",
    kepCim: "stars around you",
    kepAr: 3600,
}];
window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}
function init() {
    ID("uzenet").innerHTML = "<h1>képeeeeeeeeek </h1>";
    var txt = '';
    for (let i = 0; i < kepeim.length; i++) {
        txt += "<div><img src='" + kepeim[i].kepEleresUt + "' alt='" + kepeim[i].kepCim + "'></div>"
    }
    console.log(txt);
    ID("kepek").innerHTML = txt;

    var txtCimek = '<ul>';
    for (let i = 0; i < kepeim.length; i++) {
        txtCimek += "<li>" + kepeim[i].kepCim + "</li>"
    }
    console.log(txtCimek);
    txtCimek += '</ul>';
    ID("cimek").innerHTML = txtCimek;

    var txtAr = '<ul>';
    for (let i = 0; i < kepeim.length; i++) {
        txtAr += "<li>" + kepeim[i].kepAr + "</li>"
    }
    console.log(txtAr);
    txtAr += '</ul>';
    ID("arak").innerHTML = txtAr;
    megjelenit(1);
    ID("uj").addEventListener("click", kepbetoltes)
    ID("balra").addEventListener("click", balra)
    ID("jobbra").addEventListener("click", jobbra)
    
    megjelenit(aktKep)
}
var aktKep = 0;
function kepbetoltes() {
    console.log("katt");
    var rnd = Math.floor(Math.random() * kepeim.length)
    megjelenit(rnd);

}

function balra() {
    aktkep--;    
    if (aktkep<0) {
        aktKep=kepeim.length-1;
    }
    megjelenit(aktkep)
}
function jobbra() {
    aktkep++;
    megjelenit(aktkep)
}
function megjelenit(index) {
    ID("fokep").src = kepeim[index].kepEleresUt;
    ID("fokep").alt = kepeim[index].kepCim;
}