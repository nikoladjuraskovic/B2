var zvuk = document.getElementById('zvuk');

/*II nacin bi bio preko addEventListener*/

function pustiZvuk(zivotinja)
{
    console.log("PustiZvuk(" + zivotinja + ")");
    console.log(zvuk + " " + typeof(zvuk));

    switch(zivotinja)
    {
        case 'pas':
            zvuk.src += "pas.wav";
        break;
        case 'ovca':
            zvuk.src += "ovca.wav";
        break;
        case 'prase':
            zvuk.src += "prase.wav";
        break;
        case 'petao':
            zvuk.src += "petao.wav";
        break;
        case 'krava':
            zvuk.src += "krava.wav";
        break;
    }

    //zvuk.muted = "false";
    zvuk.play();
}

function zaustavi()
{
    console.log("zaustavi()");
    console.log(zvuk + " " + typeof(zvuk));
    zvuk.pause();
    zvuk.src = 'zvuci/';
    //zvuk.muted = "true";
    
}

function dodatniOpis(n)
{
    let title = "<title>Домаће животиње</title>";
    let cssLink="<link rel='stylesheet' href='dizajn.css'/>";
    let body = "<body id='prozor'></body>";
    let tekst;
    switch(n)
    {
        case 1:
            tekst = "<h1 id='naslov'>ПАС</h1><p>Пас је најстарија домаћа животиња. Одана је човеку. Има добро развијено памћење и чуло мириса. Оглашава се лајањем.</p>";
            break;
        case 2:
            tekst = "<h1 id='naslov'>ОВЦА</h1><p>Овца је...</p>"
            break;
        case 3:
            tekst = "<h1 id='naslov'>ПРАСЕ</h1><p>Прасе је...</p>"
            break;
        case 4:
            tekst = "<h1 id='naslov'>ПЕТАО</h1><p>Петао је...</p>"
            break;
        case 5:
            tekst = "<h1 id='naslov'>КРАВА</h1><p>Крава је...</p>"
            break;
    }

    let prozor = window.open('', '', 'width=400,height=400,top=400,left=150');
    prozor.document.write(title+cssLink+body+tekst);


}

