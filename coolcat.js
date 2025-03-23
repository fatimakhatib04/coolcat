// tutorial 2: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-basic-debugging-by-building-a-random-background-color-changer/step-8
// tutorial 1: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-introductory-javascript-by-building-a-pyramid-generator/step-21
// tutorial 3: deel "datatypes 18:55" https://youtu.be/FtaQSdrl7YA?si=qXoiIxCjcuNL7NSz

// CoolCats per maand
const cats = [
  { image: "img/0.jpeg", description: "Januari CoolCat: Deze CoolCat is negatief." },
  { image: "img/1.jpeg", description: "Februari CoolCat: Deze CoolCat is een beetje silly..." },
  { image: "img/2.jpeg", description: "Maart CoolCat: Identiteitscrisis?" },
  { image: "img/3.jpeg", description: "April CoolCat: Deze CoolCat begrijpt niet wat er aan de hand is." },
  { image: "img/4.jpeg", description: "Mei CoolCat: Deze CoolCat denkt gewoon: 'Waarom doe ik dit allemaal?'" },
  { image: "img/5.jpeg", description: "Juni CoolCat: Heeft Anger Issues, probeert wel kalm te blijven." },
  { image: "img/6.jpeg", description: "Juli CoolCat: Deze CoolCat lijkt schattig, maar... het is eigenlijk Evil Kitty" },
  { image: "img/7.jpeg", description: "Augustus CoolCat: Deze CoolCat heeft ook wel wat Anger Issues..." },
  { image: "img/8.jpeg", description: "September CoolCat: Cutesy overload." },
  { image: "img/9.jpeg", description: "Oktober CoolCat: Oktober CoolCat is happy to be here" },
  { image: "img/10.jpeg", description: "November CoolCat: Deze CoolCat is altijd klaar voor een argument." },
  { image: "img/11.jpeg", description: "December CoolCat: It's Christmas, no one cares about this Cool Kitty" }
];

const alternativeCats = [
  { image: "img/alt0.jpeg", description: "Januari CoolCat 2: Deze CoolCat is nog negatiever..." },
  { image: "img/alt1.jpeg", description: "Februari CoolCat 2: Deze CoolCat is super silly!" },
  { image: "img/alt2.jpeg", description: "Maart CoolCat 2: Deze CoolCat is helemaal in de war!" },
  { image: "img/alt3.jpeg", description: "April CoolCat 2: De chaos is compleet!" },
  { image: "img/alt4.jpeg", description: "Mei CoolCat 2: Deze CoolCat heeft alles opgegeven." },
  { image: "img/alt5.jpeg", description: "Juni CoolCat 2: Boos en trots!" },
  { image: "img/alt6.jpeg", description: "Juli CoolCat 2: Evil mode 200% geactiveerd!" },
  { image: "img/alt7.jpeg", description: "Augustus CoolCat 2: Anger Issues? Dat is nog zacht uitgedrukt." },
  { image: "img/alt8.jpeg", description: "September CoolCat 2: Nog schattiger!" },
  { image: "img/alt9.jpeg", description: "Oktober CoolCat 2: Deze kat is hyperactief!" },
  { image: "img/alt10.jpeg", description: "November CoolCat 2: Ruzie is zijn tweede naam!" },
  { image: "img/alt11.jpeg", description: "December CoolCat 2: ..." }
];

// CoolCat weer geven
function displayCatForMonth() {
  const selectedMonth = parseInt(document.querySelector("select").value);
  
  // controle
  if (isNaN(selectedMonth)) {
    alert("Selecteer eerst een maand!");
    return;
  }

  const cat = cats[selectedMonth];
  const catImage = document.querySelector("img");
  const catDescription = document.querySelector("p");
  const resetButton = document.querySelector("#resetButton");

  catImage.src = cat.image;
  catDescription.innerText = cat.description;

  catImage.style.display = "block";
  catDescription.style.display = "block";
  resetButton.style.display = "block";

  // Confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 }
  });

  showAgreeButtons();
}

// "Vind de CoolCat!" knop
document.querySelector("#startButton").addEventListener("click", displayCatForMonth);

// "Opnieuw Beginnen" knop
document.querySelector("#resetButton").addEventListener("click", () => {
  document.querySelector("select").selectedIndex = 0;

  const resultContainer = document.getElementById("resultaat");
  const catImage = resultContainer.querySelector("img");
  const catDescription = resultContainer.querySelector("p");

  catImage.style.display = "none";
  catDescription.style.display = "none";

  document.querySelector("#resetButton").style.display = "none";
  document.querySelector("#userchoice").style.display = "none";
});

// Ja/Nee-knoppen zichtbaar maken
function showAgreeButtons() {
  document.querySelector("#yesButton").onclick = () => handleUserChoice(true);
  document.querySelector("#noButton").onclick = () => handleUserChoice(false);
  
  document.querySelector("#userchoice").style.display = "block";
}

// keuze verwerken
function handleUserChoice(userAgrees) {
  const catImage = document.querySelector("img");
  const catDescription = document.querySelector("p");

  if (userAgrees) {
    // Als de gebruiker "Ja!" klikt: dansende kat
    catImage.src = "img/dancing-cat.gif";
    catDescription.innerText = "Oké, dan dansen we gewoon!";
  } else {
    //  Als de gebruiker "Nee!" klikt: alternatieve kat
    const selectedMonth = parseInt(document.querySelector("select").value);
    const cat = alternativeCats[selectedMonth];

    catImage.src = cat.image;
    catDescription.innerText = cat.description;
  }

  // Keuze-knoppen verbergen
  document.querySelector("#userchoice").style.display = "none";
}
