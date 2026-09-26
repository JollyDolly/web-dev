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
