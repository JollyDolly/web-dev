import { umiejetnosci, ADRES_API } from "./dane.js";
import { budujListe, filtrujPoKategorii, podsumowanie } from "./umiejetnosci.js";


let lista = document.querySelector("#lista-umiejetnosci");

const listaEl = document.querySelector("#lista-umiejetnosci");
listaEl.innerHTML = budujListe(umiejetnosci);


let formularz = document.querySelector("#formularz-kontaktowy");
let komunikat = document.querySelector("#komunikat");

const pokazKomunikat = (tresc, rodzaj) => {
    komunikat.textContent = tresc;
    komunikat.classList.remove("blad", "sukces");
    komunikat.classList.add(rodzaj);
};

formularz.addEventListener("submit", (event) => {
    event.preventDefault();

    const dane = Object.fromEntries(new FormData(formularz));
    const {imie,email,temat} = dane;

    if (imie.trim() === "") {
        pokazKomunikat("Podaj imię.", "blad");
        return;
    }

    if (email.trim() === "") {
        pokazKomunikat("Podaj adres e-mail.", "blad");
        return;
    }

    if (temat.trim() === "") {
        pokazKomunikat("Wybierz temat wiadomości.", "blad");
        return;
    }

    pokazKomunikat(
        `Dziękuję, ${imie}. Wiadomość na temat ${temat} została przyjęta.`,
        "sukces"
    );

    console.log("Dane z formularza:", {
        imie: imie,
        email: email,
        temat: temat
    });

    formularz.reset();
});

let przycisk = document.querySelector("#motyw");

przycisk.addEventListener("click", () => {
    let ciemny = document.body.classList.toggle("ciemny");

    przycisk.textContent = ciemny ? "Jasny motyw" : "Ciemny motyw";
});

const podsumowanieEl = document.querySelector("#podsumowanie");
const filtryEl = document.querySelector("#filtry");

const pokazUmiejetnosci = (kategoria = "wszystkie") => {
    const wybrane = filtrujPoKategorii(umiejetnosci, kategoria);

    listaEl.innerHTML = budujListe(wybrane);
    podsumowanieEl.textContent = podsumowanie(wybrane);
};

filtryEl.addEventListener("click", (event) => {
    const przycisk = event.target.closest("button");

    if (!przycisk) {
        return;
    }

    filtryEl.querySelectorAll("button").forEach(b => b.classList.remove("aktywny"));
    przycisk.classList.add("aktywny");

    pokazUmiejetnosci(przycisk.dataset.kategoria);
});

pokazUmiejetnosci();