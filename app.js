'use strict'
const QUESTIONS_ARRAY = [`Wymień znanych ci kompozytorów polskich?`,
`Co wiesz o odsieczy Wiednia?`,
`Z jakim wydarzeniem kojarzy się 3 Maj 1791 roku?`,
`Kiedy wybuchło Powstanie Warszawskie?`,
`Kto sprowadził do Polski Krzyżaków?`,
`Wymień najsłynniejszą  insygnie koronacyjną królów Polski?`,
`Gdzie i kiedy odbył się zjazd gnieźnieński?`,
`Z czym kojarzy się Targowica?`,
`Kim był Tadeusz Kościuszko?`,
`Kto wygrał bitwę pod Płowcami?`,
`Kto taki Dąbrowskie? `,
`Kto jest patronem Polski?`,
`Kim była Święta Jadwiga?`,
`Jakich malarzy Pan/Pani zna?`,
`Kim był Jan Matejko?`,
`Kim jest Lech Wałęsa?`,
`Kim był Jan Paweł II?`,
`Kim był Karol Józef Wojtyła? `,
`Kim była Wisława Szymborska?`,
`Muzeum Hymnu Narodowego w Będominie`,
`Lista UNESCO w Polsce`,
`Kto był zwycięzcą w bitwie pod Grunwaldem?`,
`W jaki sposób eleganccy Polacy witają się z kobietami?`,
`Wymień znane ci (typowe) zwyczaje  i  tradycje Polaków`,
`Kim jest Andrzej Wajda?`,
`Kim był Józef Piłsudski? `,
`Kim był Adam Mickiewicz?`,
`Kim był Mikołaj Kopernik?`,
`Wymień znanych ci reżyserów filmowych i teatralnych`,
`Kim był Jan Matejko?`,
`Co wiesz o Marii Skłodowskiej-Curie, Salomei?`,
`Jak tradycyjnie ubiera się pan młody w dniu ślubu? `,
`Proszę wymienić polskich noblistów`,
`Z jakim wydarzeniem kojarzy się 3 Maj 1791 roku?`,
`Wymień nazwiska prezydentów RP po 1989 roku`,
`Kto i kiedy założył akademię (Uniwersytet Jagielloński) w Krakowie? `,
`Wymień krainy geograficzne Polski `,
`Wymień Parki Narodowe w Polsce:`,
`Jakie zwierzę symbolizuje Puszczę Białowieską? `,
`Jakie ciasta należą do tradycyjnych deserów w Polsce? `,
`Wymień znane ci potrawy narodowe? `,
`Jakie duże polskie miasta są położone nad Bałtykiem?`,
`Przez jakie miasta przepływa rzeka Wisła?`,
`Wymień najważniejsze budowle średniowieczne w ważniejszych miastach Polski `,
`Najważniejsze miasta Polski?`,
`Jakie miasto było pierwszą stolicą Polski? `,
`Czy Polska leży nad morzem?`,
`Które góry przekraczają Polska?`,
`Dzień Polonii i Polaków za Granicą `,
`Najważniejsze rzeki i jeziora w Polsce?`,
`Co było na 13 grudnia w historii Polski? `,
`Co to jest Mazurek Dąbrowskiego?`,
`Jak wygląda flaga Polski? `,
`Jak wygląda godło Polski? `,
`Daty chrztu Polski? `,
`Autor polskiego hymnu `,
`Jaki instrument grał hymn?`,
`Data przyjęcia Konstytucji Polskiej `,
`Dlaczego na Stole Wigilijnym umieścić jedną dodatkową jednostkę?`,
`Miasto, w którym znajduje się międzynarodowy festiwal folklorystyczny? `,
`Liczba mieszkańców Polski? `,
`Co można zobaczyć w Krakowie?`,
`Co znajduję się obok Katowic?`,
`Kto jest obecnie premierem? `,
`Jaka w Polsce jest pustynia?`,
`Godło Warszawy?`,
`Jaki Polska ma podział administracyjny`,
`Co można zobaczyć w Warszawie?`,
`Zimowa stolica Polski`,
`Ile posiłków powinna być na Wigilijnym tabeli? `,
`Miasto, w którym urodził się Mikołaj Kopernik?`,
`Ile województw w Polsce?`,
`Swięto ruchome w kalendarzu chrześcijańskim przypadające 7 dni przed Wielkanocą `,
`Kiedy Polska przystąpiła do Unii Europejskiej?`,
`Co to jest słynny ikona w Farnham (jezuita) kościoła?`,
`W czasie których świąt narodowych większość banków i instytucji jest zamknięta, podobnie jak wiele mniejszych sklepów?`,
`Jaki wielki dzień na początku Wielkiego Postu?`,
`Kim był Karol Józef Wojtyla? `,
`Kiedy jest karnawał?`,
`Kiedy jest Wigilia?`,
`Kiedy ubierają choinkę? `,
`Ile potraw zwykle gotuje się na Wigilię? `,
`Jak nazywa się msza na Boże Narodzenie?`,
`Czym dzielą się podczas śniadania wielkanocnego? `,
`Co to jest pisanki i malowanki?`,
`Co odbywa się w Wielki Piątek?`,
`Proszę nazwać tylko polskie święta?`,
`Co łożymy pod biały obrus podczas Wigilii?`,
`Kiedy dzielą się opłatkiem? `,
`Czym jest opłatek? `,
`Jak nazywa się post przed Bożym Narodzeniem? `,
`Ulubione danie na Wigilię?`,
`Kiedy siadamy do stołu podczas Wigilii?`,
`Kiedy obchodzimy Wielkanoc?`,
`Na pamiątkę czego obchodzimy Wielkanoc?`,
`Jak nazywa się post przed Wielkanocą? `,
`Co święcimy w kościele na Welkanoc? `,
`Co to jest śmingus-dyngus? `,
`Jak nazywa się msza wielkanocna? `,
`Kiedy zaczyna się Wielki Post? `,
`Co stoi na stole podczas Wielkanocy? `,
`Jak nazywa się jednym słowem koszyk wielkonocny? `,
`Kiedy jest Boże Ciało?`,
`Kiedy jest Dzień Wszystkich Świętych?`,
`Kiedy jest Dzień św.Mikałaja?`,
`Kiedy katolicy obchodzą dzień Bożego Narodzenia?`,
`Kiedy jest Dzień św.Sylwestra?`,
`Jak nazywa się drugi dzień Bożego Narodzenia?`,
`Kiedy jest Dzień Flagi?`,
`Kiedy jest Dzień Wszystkich zmarłych (zaduszki)?`,
`Co robimy na Dzień Wszystkich zmarłych?`,
`Jakie świeto jest 3 maja? `,
`Prosze nazwać dwa najważniejsze święta w Polsce? `,
`Kiedy jest Dzień św.Andrzeja?`,
`Kiedy jest Niedziela Palmowa?`,
`Kiedy Dzień pracy?`,
`Jakie świeta są 2 maja? `,
`Prosze nazwać dwa najważniejsze religijnie święta?`,
`Jakie świeta są 15 sierpnia?`,
`Święta państwowe?`,
`Co to jest dażynki?`,
`Co dziwi nas na cmentarzu 2 listopada? `,
`Najbardziej znany Polak w świecie?`,
`Jakie zabytki są w Mińsku?`,
`W jakim polskim mieście jest znany festywal muzyczny? `,
`Jacy znani Polacy mieszkają w Pana/Pani mieście?`,
`Kto z Polaków jest związany z Białorusią? `,
`Kto z Polaków jest związany z Pana/Pani miastem? `,
`Co ciekawego jest w Pana/Pani mieście?`,
`Proszę nazwać białoruskie potrawy tradycyjne? `,
`Czy zna Pan/Pani piosenki patriotyczne?`,
`Gdzie mieszka Smok Wawielski?`,
`Czym różnią się PiS i PKS?`,
`Co to jest PKB, PKS, PiS, PKP, PO? `,
`Kto powiedział «Polacy nie gęsi, swój język mają»`,
`Z czym jest związane miasto Toruń? `,
`Gdzie przechodzi festiwal folklorowy? `,
`Kto z polskich kompozytorów uczył się w Mińsku?`,
`Proszę nazwać dwóch piosenkarzy?`,
`Proszę nazwać dwóch aktorów polskich?`,
`Kto napisał utwór „Quo vadis”? `,
`Kto z poetów polskich urodził się koło Nowogrudka? `,
`Kto otrzymał nagrodę Nobla za poezję?`,
`Proszę nazwać dwóch działaczy sztuki? `,
`Kiedy zmarła Wisława Szymborska `,
`Najbardziej znany kompozytor Polski? `,
`Jakie zabytki można zobaczyć na Białorusi, związane z Polską?`,
`Trzy stolicy Polski? `,
`Kto w 1918 roku objawił niepodległość Polski?`,
`Co stworzył L.Wałęsa?`,
`Proszę nazwać dwóch sportowców? `,
`Kto namalował «Bitwę pod Grunwaldem»? `,
`Kto napisał «Nad Niemnem»?`,
`Co napisał W.Reymont?`,
`Jaki utwory Sienkiewicza Pan/Pani zna? `,
`Kto jest autorem teorii heliocentrycznej? `,
`Kto otrzymał dwie nagrody Nobla w różnych dziedzinach? `,
`Co napisał A.Mickewicz? `,
`Kto z prezydentów zginał pod Smoleńskiem?`,
`Z czym związany w Polsce 1980 rok?`,
`Co to jest zbrodnia katyńska?`,
`Kim są żołnierze wyklęci`,
`Kiedy utworzyła się RP?`,
`Kiedy zaczęła się II wojna światowa? `,
`Kto był pierwszym prezydentem Polski?`,
`Kiedy utworzyła się partia „Solidarność”`,
`Czym jest «Solidarność», gdzie, kiedy, kierownik?`,
` Proszę nazwać dwóch przestawicelieli dynastii Piastów?`,
` Kto był prezydentem Polski, kiedy Polska wstąpiła do UE?`,
`Kiedy odbyło się ogłoszenie niepodległości? `,
`Kiedy Karol Wojtyła został paperzem?`,
`Kiedy Polska wstąpiła do NATO?`,
`Kiedy odbył się «Cud nad Wisłą»? `,
`Kto założył Polskę?`,
`Proszę wymienić polskich generałów`,
`Liczba ludności Polski`,
`Ile jest województw w Polsce? Wymień kilka.`,
`Co jest koło Katowic`,
`Kiedy odbyła się Unia Krewska?`,
`Kto był ostatnim królem z dynastii Jagellonów`,
`Kto był pierwszym królem z dynastii Jagellonów`,
`Kim była Jadwiga?`,
`Dynastie królewskie w Polsce?`,
`Co to jest Miecz Szczerbiec?`,
`Kim był Piast Kołodziej?`,
`Co się stało z Popielem?`,
`Kto był pierwszym królem Polski?`,
`Data chrztu Polski?`,
`Gdzie i kiedy odbył się Zjazd Gnieźnieński?`,
`Kiedy odbyła się II Rzeczpospolita Polska?`,
`Miasta – stolice Polski?`,
`Gdzie i jak zginą Święty Wojciech?`,
`Kiedy odbyła się III Rzeczpospolita Polska?`,
`Kiedy odbyła się Unia Lubelska?`,
`W jakim wieku powstała Polska?`,
`Kto był ostatnim królem Polski?`,
`Gdzie i kiedy koronowano Bolesława Chrobrego?`,
`Testament Bolesława Krywoustego.`,
`Kto sprowadził Krzyżaków do Polski?`,
`Konstytucja 3 Maja?`,
`Okres rozbiorów?`,
`Kiedy miał miejsce Potop szwedzki?`,
`Postać Króla Jana III Sobieskiego?`,
`Gdzie i kiedy zginął Król Władysław Warneńczyk`,
`Kiedy odbyła się bitwa pod Grunwaldem?`,
`Kto i kiedy założyw pierwszy uniwersytet w Polsce`,
`O kim mówiono „Został Polskę drewnianą, a zostawił murowaną”`,
`Kto wygrał bitwę pod Płowcami?`,
`Kiedy odbyła się koronacja Władysława Łokietka?Co oznacza ta koronacja?`,
`Kiedy odbył się napad Tatarów`,
`Dlaczego doszło do rozbiorów i upadku Rzeczpospolitej?`,
`Legiony Polskie we Włoszech, generał Dąbrowski.`,
`12 marca 1999r.`,
`Wymień nazwiska prezudentów Rzeczpospolitej Polski`,
`Data wstąpienia Polski do NATO?`,
`Koniec rządów komunistycznych`,
`13 grudzień 1981r.`,
`Z jakim wydarzeniem kojarzy się 13 grudzień?`,
`Rok założenia Związku Zawodowego "Solidarność"`,
`Polska po 1944 roku. `,
`8 maja 1945r.`,
`1 sierpnia 1944`,
`Wyzwolenie miasta Bredy w Holandii`,
`Walki w północnych Włoszech `,
`Bitwa o Monte Cassino`,
`Bitwa o Anglię`,
`1 września 1939r`,
`ostatni Prezydent II Rzeczpospolitej`,
`pierwszym Prezydentem II Rzeczpospolitej`,
`Cud nad Wisłą`,
`Kiedy wybuchło Powstanie Styczniowe?`,
`Kiedy wybuchło Powstanie Listopadowe?`,
`Józef Piłsudsk`,
`Stefan Banach`,
`Jan Heweliusz`,
`Mikołaj Kopernik`,
`Jan Paweł II – Karol Wojtyła`,
`Wisława Szymborska`,
`Lech Wałęsa`,
`Czesław Miłosz`,
`Henryk Sienkiewicz`,
`Maria Skłodowska-Curie`,
`Juliusz Słowacki`,
`Zbigniew Herbert`,
`Juliusz Tuwim `,
`Jan Kochanowski`,
`Mikołaj Rej`,
`Adam Mickiewicz`,
`Krzysztof Kieślowski`,
`Roman Polański `,
`Jerzy Hoffman`,
`Andrzej Wajda `,
`Witold Lutosławski`,
`Fryderyk Franciszek Chopin`,
`Karol Szymanowski`,
`Trzech Kroli`,
`Sylwester `,
`Świętego Szczepana `,
`Pasterka`,
`Boże Narodzenie`,
`Kolędy`,
`Opłatek`,
`Wigilia (Wieczór Wigilijny)`,
`Mikołajki lub Świętego Mikołaja`,
`Adwent.`,
`Andrzejki`,
`Katarzynki`,
`Wszystkich Świętych, Dzień Zaduszny.`,
`Dożynki`,
`Obchody świętojańskiej sobótki`,
`Poniedziałek Wielkanocny`,
`Wielkanoc`,
`Wielki Piątek`,
`Niedziela Palmowa`,
`Środa Popielcowa`,
`Tłusty Czwartek`,
`Karnawał`,
`1 stycznia`,
`6 stycznia `,
`21 stycznia`,
`8 marca`,
`Niedziela i poniedziałek – pierwsza niedziela po pierwszej wiosennej pełni księżyca `,
`7 niedziela po Wielkanocy`,
`Czwartek dziewiątego tygodnia po Wielkanocy `,
`1 maja`,
`2 maja`,
`3 maja `,
`26 maja `,
`1 czerwca`,
`15 sierpnia`,
`16 padźiernika`,
`1 listopada`,
`11 listopada`,
`24 grudnia`,
`25 grudnia`,
`26 grudnia`,
`Co Polacy jedzą w Tłusty Czwartek?`,
`Kim był Władysław Horodecki`,
`Jakie ciasta należą do tradycyjnych deserów w Polsce?`,
`Wymień znane ci polskie potrawy narodowe?`,
`Co to jest choinka?`,
`Gdzie mieszka Smok wawelski?`,
`Jakie zwierzę symbolizuje Puszczę Białowieską?`,
`Kto jest świętym patronem Polski? Патрон Польши?`,
`Kiedy na godle Polski nie było korony?`,
`akie święto obchodzi się w Polsce 1 listopada`,
`Dzień Niepodległości?`,
`Dzień Konstytucji?`,
`Organ władzy w Polsce?`,
`Co to jest Rzeczpospolita Polska`,
`Stolica Polski?`,
`Liczba ludności?`,
`Polski Prezydent?`,];

const randomBtn = document.querySelector('.random');
const backBtn = document.querySelector('.back');
const doneBtn = document.querySelector('.done');
const doneListBtn = document.querySelector('.done-list-btn');
const closeDoneBtn = document.querySelector('.close-done-btn');
const amountDone = document.querySelector('.amount-done');
const forDones = document.querySelector('.for-dones');
let deleteDoneButtons;

const question = document.querySelector('.question');
const questionNumber = document.querySelector('.question-number');
const doneContainer = document.querySelector('.done-container');

const numberForm = document.forms.numberForm;
const inputNumber = numberForm.elements.inputNumber;
const submitNumber= numberForm.elements.submitNumber;

let previousQuestion;
let previousNumber;
let previousNumberValue;

numberForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (questionNumber.innerText !== '') {
        previousQuestion = question.innerText;
        previousNumber = questionNumber.innerText;
        previousNumberValue = previousNumber.match(/#\d*/).toString().slice(1)
    }
    if (inputNumber.value) {
        questionNumber.innerText = `#${inputNumber.value}/313`;
        question.innerText = QUESTIONS_ARRAY[inputNumber.value - 1];
    }
})

backBtn.addEventListener('click', () => {
    if (previousNumber) {
        question.innerText = previousQuestion;
        questionNumber.innerText = previousNumber;
        inputNumber.value = previousNumberValue;
    }
})

randomBtn.addEventListener('click', () => {
    if (questionNumber.innerText !== '') {
        previousQuestion = question.innerText;
        previousNumber = questionNumber.innerText;
        previousNumberValue = inputNumber.value;
    }
    getRandomQuestion();
});

doneBtn.addEventListener('click', () => {
    if (questionNumber.innerText !== '') {
        localStorage.setItem(`${questionNumber.innerText.match(/#\d*/).toString()}`, question.innerText);
    };
})

doneListBtn.addEventListener('click', () => {
    doneContainer.classList.toggle('done-container-clicked');
    amountDone.innerText = `${localStorage.length}/313`;
    createDoneList();
    deleteDoneButtons = document.querySelectorAll('.done-btn-delete');

    Array.from(deleteDoneButtons).forEach(btn => {
        btn.addEventListener('click', ()=> {
            const number = btn.parentNode.firstChild.firstChild.innerText;
            btn.parentNode.parentNode.removeChild(btn.parentNode);
            localStorage.removeItem(number);
        })
    })

})

closeDoneBtn.addEventListener('click', () => {
    doneContainer.classList.toggle('done-container-clicked');
})

function createDoneList() {
    //very bad code
    const keys = Object.keys(localStorage);
    if (forDones.hasChildNodes() === true) {
        while (forDones.firstChild) {
            forDones.removeChild(forDones.firstChild);
        }
    }
    for (let key of keys) {
            const itemDiv = document.createElement('div');
            const number = document.createElement('div');
            const question = document.createElement('p')
            const btnDelete = document.createElement('div');

            number.appendChild(document.createElement('p'));
            question.appendChild(document.createElement('p'));
            btnDelete.appendChild(document.createElement('p'));

            number.querySelector('p').innerText = key;
            question.querySelector('p').innerText = localStorage.getItem(key);
            btnDelete.querySelector('p').innerText = '×';

            itemDiv.classList.add('done-item-div');
            number.classList.add('done-item-number');
            question.classList.add('done-item-question');
            btnDelete.classList.add('done-btn-delete');

            itemDiv.appendChild(number);
            itemDiv.appendChild(question);
            itemDiv.appendChild(btnDelete);
            
            forDones.appendChild(itemDiv);
    }
}

function getRandomQuestion() {
    let random = Math.floor(Math.random() * QUESTIONS_ARRAY.length);
    if (!localStorage.hasOwnProperty(`#${random+1}`)) {
        questionNumber.innerText = `#${random+1}/313`;
        question.innerText = QUESTIONS_ARRAY[random];
        inputNumber.value = random+1;
    } else {
        return getRandomQuestion()
    }
}