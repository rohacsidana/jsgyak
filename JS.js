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
console.log("képek árainak átlaga: ", atlagAr());
console.log("van 10 ezernél drágább kép: ", tizEzernelDragabb());
console.log("címek, amik 20 karakternél nagyobbak: ", husznalHosszabb().join());
console.log("cicás címek: ", cica().join());

function atlagAr() {
    var arAtlag = 0;
    for (let i = 0; i < kepeim.length; i++) {
        arAtlag += kepeim[i].kepAr;
    }
    return arAtlag / kepeim.length;
}
function tizEzernelDragabb() {
    var i = 0;
    while (i < kepeim.length && !(kepeim[i].kepAr > 10000)) {
        i++;
    }
    var tizEzernelDragabb = i < kepeim.length;
    return tizEzernelDragabb ? "igen" : "nem"
}
function husznalHosszabb() {
    var hosszuCimek =[];
    for (let i = 0; i < kepeim.length; i++) {
        kepeim[i].kepCim = kepeim[i].kepCim.replaceAll("^[A-ZÁÉÍÚŐÖÜŰa-záéíöüőúű]", "");

        if (kepeim[i].kepCim.length > 20) {
            hosszuCimek.push(kepeim[i].kepCim);
        }
    }
    return hosszuCimek;


}
function cica() {
    var cicaHelySzamlalo = [];
    var cicasCim = []
    for (let i = 0; i < kepeim.length; i++) {
        if (kepeim[i].kepCim.indexOf("cica") != -1) {
            cicaHelySzamlalo.push(i);
        }
    }
    for (let i = 0; i < cicaHelySzamlalo.length; i++) {
        cicasCim.push(kepeim[cicaHelySzamlalo[i]].kepCim);
    }
    return cicasCim
}
