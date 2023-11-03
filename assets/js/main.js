

// ============================================
// >>>>>>>>>>>>>>>>Codeflow_uebung_lvl_1_8
// ============================================

console.log("%c <<<<<<<Codeflow_uebung_lvl_1_8>>>>>>>", "color: yellowgreen; fontsize: 16px;")

const reiseZiele = ["Frankreich", "Griechenland", "Iran", "Turkei", "Portugal"];
console.log(reiseZiele);

const reiseZieleFirstTwo = reiseZiele.slice(0, 2);
console.log(reiseZiele);
console.log(reiseZieleFirstTwo);

// ============================================
// >>>>>>>>>>>>>>>>Codeflow_uebung_lvl_1_10
// ============================================

console.log("%c <<<<<<<Codeflow_uebung_lvl_1_10>>>>>>>", "color: yellowgreen; fontsize: 16px;");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."


const pointSeparation = text.split(".");
console.log(pointSeparation);

const spaceSeparation = text.split(" ");
console.log(spaceSeparation);

const charachterSeparation = text.split("");
console.log(charachterSeparation);

// ============================================
// >>>>>>>>>>>>>>>>Array-Iteration-Level-1_1
// ============================================

console.log("%c <<<<<<<Array-Iteration-Level-1_1>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]


getraenke.forEach((elt) => document.write(`${elt} <br>`));

// ============================================
// >>>>>>>>>>>>>>>>Array-Iteration-Level-1_2
// ============================================

console.log("%c <<<<<<<Array-Iteration-Level-1_2>>>>>>>", "color: yellowgreen; fontsize: 16px;");

const upperDrinks = getraenke.map((elt) => console.log(elt.toUpperCase()));

// ============================================
// >>>>>>>>>>>>>>>>Array-Iteration-Level-1_3
// ============================================

console.log("%c <<<<<<<Array-Iteration-Level-1_3>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const doubleSort = array.map((num) => num * 2).sort((num1, num2) => num1 - num2);
console.log(doubleSort);


// ============================================
// >>>>>>>>>>>>>>>>Array-Iteration-Level-1_4
// ============================================

console.log("%c <<<<<<<Array-Iteration-Level-1_4>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celcArray = fahrenheit.map((value) => Math.floor((value - 32) / 1.8));
console.log(celcArray);

// ============================================
// >>>>>>>>>>>>>>>>Array-Iteration-Level-1_5
// ============================================

console.log("%c <<<<<<<Array-Iteration-Level-1_5>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const checkedNum = checkNumber.map((num) => num % 3 === 0 ? num + 100 : num);
console.log(checkedNum);

// ============================================
// >>>>>>>>>>>>>>>>Array-Iteration-Level-1_6
// ============================================

console.log("%c <<<<<<<Array-Iteration-Level-1_6>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

const filtered  = album.map((fileName) => fileName.includes(".") ? fileName.slice(0, fileName.indexOf(".")).toLowerCase() : fileName = "invalid");
console.log(filtered);

// ============================================
// >>>>>>>>>>>>>>>>Array-Sort-Level-1_1
// ============================================

console.log("%c <<<<<<<Array-Sort-Level-1_1>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = languages.sort();
console.log(sortierung);

// ============================================
// >>>>>>>>>>>>>>>>Array-Sort-Level-1_2
// ============================================

console.log("%c <<<<<<<Array-Sort-Level-1_2>>>>>>>", "color: yellowgreen; fontsize: 16px;");

const sortierung2 = languages.sort().reverse();
console.log(sortierung2);


// ============================================
// >>>>>>>>>>>>>>>>Array-Sort-Level-2_1
// ============================================

console.log("%c <<<<<<<Array-Sort-Level-2_1>>>>>>>", "color: yellowgreen; fontsize: 16px;");

const myName = "Samuel";
const reverter = (text) => text.split("").reverse().join("");
console.log(reverter(myName));
console.log(reverter("Sergio"));
console.log(reverter("Hannah"));
console.log(reverter("Regallager"));
console.log(reverter("Reliefpfeiler"));
console.log(reverter("Rentner"));
console.log(reverter("Ella mag alle Bohnen"));
console.log(reverter("han nesaH has ennaH"));

// ============================================
// >>>>>>>>>>>>>>>>Array-Sort-Level-2_1 Bonus
// ============================================

console.log("%c <<<<<<<Array-Sort-Level-2_1 Bonus>>>>>>>", "color: yellowgreen; fontsize: 16px;");

const bonusReverter = (elt) => elt.includes(" ") ? elt.split(" ").map((text) => console.log(text.split("").reverse().join(""))) : console.log(elt.split("").reverse().join(""));


bonusReverter("This is a Test");
bonusReverter("test");

// ============================================
// >>>>>>>>>>>>>>>>Array-Sort-Level-2_2 
// ============================================

console.log("%c <<<<<<<Array-Sort-Level-2_2>>>>>>>", "color: yellowgreen; fontsize: 16px;");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const sortieren = numArray2.sort((num1, num2) => num1 -num2);
console.log(sortieren);