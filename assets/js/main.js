/*  Aufgabe

input Geburtsjahr
        id type:age    +    let age


Button rechnet
        function rechnenAlter 
                     age - aktuelle JahresDatum

        let output    + innerHTML 

in Html wird das Alter geschrieben

 */

// Varibeln über die ids holen
let inputGeburtsjahr = document.getElementById("inputGeburtsjahr");
let outputGeburtsjahr = document.getElementById("outputGeburtsjahr");
let buttonSubmit = document.getElementById("buttonSubmit");

// Event holen       und in Variable packen
buttonSubmit.addEventListener("click", rechnenAlter);


// function rechnenAlter
function rechnenAlter(){
    let ergebnis = ( 2022 - inputGeburtsjahr.value );

    console.log(ergebnis);

    outputGeburtsjahr.innerHTML = ergebnis;

}
