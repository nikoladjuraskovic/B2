const slike = document.querySelectorAll(".slike-zivotinja");
const zvuk = document.querySelector("#zvuk");
let zivotinja = "";
let opis_zivotinje = "";
let title = "<title>Домаће животиње</title>";
let cssLink = "<link rel='stylesheet' href='style.css'/>";
let body = "<body id='prozor'></body>";
/*
Vise o automatskom pustanju zvuka na veb stranici i
objasnjenje zasto se u konzoli ispusuje error
https://developer.chrome.com/blog/autoplay/
*/
for (let i = 0; i < slike.length; i++) {

    slike[i].addEventListener('mouseover', function () {
        zvuk.src = `zvuci/${slike[i].id}.wav`;
        zvuk.play();
    });

    slike[i].addEventListener('mouseout', function () {
        zvuk.pause();
    });

    slike[i].addEventListener('click', function () {

        if (slike[i].id === "pas") {
            zivotinja = "ПАС";
            opis_zivotinje = "Пас је најстарија домаћа животиња. Одана је човеку. Има добро развијено памћење и чуло мириса. Оглашава се лајањем.";
        }
        else if (slike[i].id === "petao") {
            zivotinja = "ПЕТАО"
            opis_zivotinje = "Петао је...";
        }
        else if (slike[i].id === "prase") {
            zivotinja = "ПРАСЕ"
            opis_zivotinje = "Прасе је...";
        }
        else if (slike[i].id === "krava") {
            zivotinja = "КРАВА"
            opis_zivotinje = "Крава је...";
        }
        else if (slike[i].id === "ovca") {
            zivotinja = "ОВЦА"
            opis_zivotinje = "Овца је...";
        }

        let tekst = `<h1 id="naslov">${zivotinja}</h1><p class="opis">${opis_zivotinje}</p>`;
        let prozor = window.open('', '', 'width=400,height=400, top=800, left=150');
        prozor.document.querySelector("html").innerHTML = title + cssLink + body + tekst;
    });
}
