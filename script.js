const budujListe = (tablica) =>
    tablica.map(({ nazwa, gwiazdki }) => {
            const klasa = gwiazdki >= 4 ? "wyrozniony" : "";
            return `<li class="${klasa}">${nazwa} - ${gwiazdki} gwiazdek</li>`;
        }).join("");

const przefiltrowane = hotele.filter(({ cena }) => cena < 450);

const sredniaCena = 
    przefiltrowane.reduce((suma, { cena }) => suma + cena, 0) / przefiltrowane.length;

document.querySelector("#lista").innerHTML = budujListe(przefiltrowane);

document.querySelector("#podsumowanie").textContent =
    `Hoteli: ${przefiltrowane.length}, średnia cena: ${sredniaCena} zł`;