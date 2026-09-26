const umiejetnosci = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Git",
    "Praca w zespole"
];


let lista = document.querySelector("#lista-umiejetnosci");
for (let umiejetnosc of umiejetnosci) {
    let li = document.createElement("li");
    li.textContent = umiejetnosc;
    lista.appendChild(li);
}

let formularz = document.querySelector("#formularz-kontaktowy");
let komuniakt = document.querySelector("#komunikat");

function pokazKomunikat(tresc,rodzaj){
    komuniakt.textContent = tresc;
    komuniakt.classList.remove("blad","sukces");
    komuniakt.classList.add(rodzaj);
}

formularz.addEventListener("submit", function (event) {
        event.preventDefault();

        let imie = document.querySelector("#imie").value.trim();
        let email = document.querySelector("#email").value.trim();
        let temat = document.querySelector("#temat").value.trim();
        let wiadomosc = document.querySelector("#tresc").value.trim();

        if(imie === ""){
            pokazKomunikat("Podaj imie. ", "blad");
            return;
        }

        if(email === ""){
            pokazKomunikat("Podaj adres e-mail. ", "blad");
            return;
        }

        if(temat === ""){
            pokazKomunikat("Wybierz temat wiadomosci" , "blad");
            return;
        }

        pokazKomunikat("Dziekuje, " + imie + ". Wiadomosc na temat " + temat + " zostala przyjeta." , "sukces");

    console.log("Dane z formularza: ",{

        imie: imie,
        email: email,
        temat: temat,
        tresc: tresc

    });

    formularz.reset();

});

let przycisk = document.querySelector("#motyw");

przycisk.addEventListener("click", function(){
    let ciemny = document.body.classList.toggle("ciemny");

    if(ciemny){
        przycisk.textContent = "Jasny motyw";
    }
    else{
        przycisk.textContent = "Ciemny motyw";
    }

});
