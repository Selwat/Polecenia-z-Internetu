let songs = [
    {name: "Pszczółkamaja", duration:"134", plays:"143245"},
    {name: "Hipopotam", duration:"155", plays:"5345"},
    {name:"Życiejestpiękne", duration:"111", plays:"12344356"},
];

const TheLongestSong = () =>{
    let result = songs[0];
    for(let i = 1, {length} = songs; i<length; i++){
        if(result.duration < songs[i].duration) result = songs[i];
    }
    console.log(result);
}
TheLongestSong();

const TheLongestNameOfSong = () =>{
    let nameSong = songs[0];
    for(let i = 1, {length} = songs; i<length; i++){
        if(nameSong.name.length < songs[i].name.length) nameSong = songs[i];
    }
    console.log(nameSong);
}
TheLongestNameOfSong();


/*zad 1 Utwórz 3 elementy, przycisk z id="przycisk", div-a z id="element_div" i span z id="element_span".
 Kliknięcie na którykolwiek z nich ma wypisywać identyfikator klikniętego elementu do utworzonego div-a z id="opis". Użyj this. */

/* const elementy = document.querySelectorAll('.elementy');
const opis = document.getElementById("opis");
for(const element of elementy) {
    element.addEventListener("click", function() {
        opis.innerHTML = this.id;
    })
} */

/* 
zad 2 Napisz kod, który po naciśnięciu przycisku z podpisem Pokaż. Przepisze wartość z pola tekstowego type="number" do div id="wynik". 
Liczbę wypisz jako nagłówek 1 stopnia. Sprawdź w konsoli typ odczytanej wartości. */
/* const pokaz = document.querySelector(".pokaz");
      let num = document.querySelector("#number");
      let wynik = document.querySelector("#wynik");

    pokaz.addEventListener("click", function(){
        wynik.innerHTML = "<h1>"+num.value+"</h1>";
        console.log(num.type);
    }) */

   /* zad3 Utwórz stronę wg. wzoru. Suwak ma umożliwiać zmianę rozmiaru czcionki w zakresie od 0 do 250px. 
   Wartość początkowa 14px.
   
    const range = document.querySelector('.range');
    const p = document.querySelector('.p');

    const funkcja = () =>{
        p.style.fontSize = range.value + "px";
    };

    range.addEventListener("change", funkcja); */

   /* zad4 Utwórz stronę która ma czarne tło i zawiera suwak.
     Na suwaku można ustawić wartość od 0 do 255, domyślnie 0. Suwak ma umożliwiać zmianę składowej R, koloru tła strony.
   
     const suwak = document.querySelector(".range");

    const zamiana = () =>{
       document.body.style.background = `rgb(${suwak.value}, 255, 255)`;
    };
    suwak.addEventListener("click", zamiana); */
  