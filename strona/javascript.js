
const umiejetnosci = [
    { nazwa: "HTML", poziom: 5, kategoria: "frontend" },
    { nazwa: "CSS", poziom: 5, kategoria: "frontend" },
    { nazwa: "JavaScript", poziom: 4, kategoria: "frontend" },
    { nazwa: "SQL", poziom: 4, kategoria: "backend" },
    { nazwa: "Git", poziom: 3, kategoria: "narzedzia" },
    { nazwa: "Praca w zespole", poziom: 4, kategoria: "miekkie" }
];

let lista = document.querySelector("#lista-umiejetnosci");

const budujListe = (lista) =>
    lista
        .map(({ nazwa, poziom }) => `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5">${"●".repeat(poziom)}${"○".repeat(5 - poziom)}</span>
            </li>
        `)
        .join("");

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

const filtrujPoKategorii = (lista, kategoria) =>
    kategoria === "wszystkie"
        ? [...lista]
        : lista.filter(u => u.kategoria === kategoria);


const sredniPoziom = (lista) => {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce((razem, { poziom }) => razem + poziom, 0);
    return Math.round((suma / lista.length) * 10) / 10;
};

const podsumowanie = (lista) =>
    lista.length === 0
        ? "Brak umiejętności w tej kategorii."
        : `Umiejętności: ${lista.length} · średni poziom: ${sredniPoziom(lista)

        }`;

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