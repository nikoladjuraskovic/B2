const slike = document.querySelectorAll(".slike-zivotinja");
const zvuk = document.querySelector("#zvuk");


/*
Vise o automatskom pustanju zvuka na veb stranici i
objasnjenje zasto se u konzoli ispusuje error
https://developer.chrome.com/blog/autoplay/
*/
for(let i = 0; i < slike.length; i++)
{
    slike[i].addEventListener('mouseover', function() {
        if(slike[i].id === "pas")
            zvuk.src = "zvuci/pas.wav";

        else if(slike[i].id === "petao")
            zvuk.src = "zvuci/petao.wav";

        else if(slike[i].id === "prase")
            zvuk.src = "zvuci/prase.wav";

        else if(slike[i].id === "krava")
            zvuk.src = "zvuci/krava.wav";

        else if(slike[i].id === "ovca")
            zvuk.src = "zvuci/ovca.wav";

        zvuk.play();
    });

     slike[i].addEventListener('mouseout', function() {
        zvuk.pause();
    });

     slike[i].addEventListener('click', function() {

        let title = "<title>Домаће животиње</title>";
        let cssLink="<link rel='stylesheet' href='style.css'/>";
        let body = "<body id='prozor'></body>";
        let tekst;
    
        if(slike[i].id === "pas")
            tekst = '<h1 id="naslov">ПАС</h1><p class="opis">Пас је најстарија домаћа животиња. Одана је човеку. Има добро развијено памћење и чуло мириса. Оглашава се лајањем.</p>';

        else if(slike[i].id === "petao")
            tekst = '<h1 id="naslov">ПЕТАО</h1><p class="opis">Петао је... </p>';

        else if(slike[i].id === "prase")
            tekst = '<h1 id="naslov">ПРАСЕ</h1><p class="opis">Прасе је... </p>';

        else if(slike[i].id === "krava")
            tekst = '<h1 id="naslov">КРАВA</h1><p class="opis">Крава је... </p>';

        else if(slike[i].id === "ovca")
            tekst = '<h1 id="naslov">ОВЦA</h1><p class="opis">Овца је... </p>';

        let prozor = window.open('', '', 'width=400,height=400, top=800, left=150');
        prozor.document.querySelector("html").innerHTML = title+cssLink+body+tekst;
    });
}
