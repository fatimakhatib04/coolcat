// tutorial 2: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-basic-debugging-by-building-a-random-background-color-changer/step-8
// tutorial 1: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-introductory-javascript-by-building-a-pyramid-generator/step-21

const cats = [
  { image: "img/0.jpeg", description: "Januari CoolCat: Deze CoolCat is negatief." },
  { image: "img/1.jpeg", description: "Februari CoolCat: Deze CoolCat is een beetje silly..." },
  { image: "img/2.jpeg", description: "Maart CoolCat: Identiteitscrisis?" },
  { image: "img/3.jpeg", description: "April CoolCat: Deze CoolCat begrijpt niet wat er aan de hand is." },
  { image: "img/4.jpeg", description: "Mei CoolCat: Deze CoolCat denkt gewoon: 'Waarom doe ik dit allemaal?'" },
  { image: "img/5.jpeg", description: "Juni CoolCat: Heeft Anger Issues, probeert wel kalm te blijven." },
  { image: "img/6.jpeg", description: "Juli CoolCat: Deze CoolCat lijkt schattig, maar... het is eigelijk Evil Kitty" },
  { image: "img/7.jpeg", description: "Augustus CoolCat: Deze CoolCat heeft ook wel wat Anger Issues..." },
  { image: "img/8.jpeg", description: "September CoolCat: Cutesy overload." },
  { image: "img/9.jpeg", description: "Oktober CoolCat: Oktober CoolCat is happy to be here" },
  { image: "img/10.jpeg", description: "November CoolCat: Deze CoolCat is altijd klaar voor een argument." },
  { image: "img/11.jpeg", description: "December CoolCat:  Its christmas, no one cares about this Cool Kitty" }
];


function displayCatForMonth(month) {
  const cat = cats[month];
  const catImage = document.querySelector("#cat-image");
  const catDescription = document.querySelector("#cat-description");

  // afbeelding en beschrijving
  catImage.src = cat.image;
  catDescription.innerText = cat.description;

  catImage.style.display = "block";
  catDescription.style.display = "block";
  
  // confetti
  confetti(
    {
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 }
    }
  );
}

// knop
document.querySelector("button").addEventListener("click", () => {
  const selectedMonth = document.querySelector("select").value;
  displayCatForMonth(selectedMonth);
}
);
