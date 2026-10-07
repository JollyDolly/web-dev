
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
