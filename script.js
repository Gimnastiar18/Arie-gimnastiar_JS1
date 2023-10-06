//if else nested if //
console.log ("if else nested if")
let usia = 18;

if (usia >= 18) {
  console.log("Anda sudah Dewasa ya ");
} else if (usia >= 13) {
  console.log("Masih abg labil alias remaja");
} else {
  console.log("Bocil");
}

let num = 18;

if (num > 0) {
  if (num % 2 == 0) {
    console.log("Angkanya positif dan genap.");
  } else {
    console.log("Bilangan tersebut positif dan ganjil.");
  }
} else if (num < 0) {
  console.log("angka negative");
} else {
  console.log("null");
}

// switch caseeeeeeee // 
console.log("switch caseeeeeeee")
let day = "SENINN";

switch (day) {
  case "SENINN":
    console.log("Today is SENINN AKA KEMARIN HARI BATIK");
    break;
  case "selasa":
    console.log("Today is selasa");
    break;
  case "rabuu":
    console.log("Today is rabuu");
    break;
  case "kamis":
    console.log("kamis");
    break;
  case "Jumat berkah":
    console.log("Today is Jumat berkah");
    break;
  case "sabtu":
    console.log("Today is sabtu asik malming hahah");
    break;
  case "minggu":
    console.log("Today is minggu .");
    break;
  default:
    console.log("seminggu harimu senin selaluuuu");
}

// FOR  STATEMENTTTTTTTT //

console.log("FOR  STATEMENTTTTTTTT")
for (let i = 1; i <= 7; i++) {
    console.log(i);
  }
  
  let klublawakmingguini = ["munyUK", "mudryk", "psg", "arsenall"];
  
  for (let i = 0; i < klublawakmingguini.length; i++) {
    console.log(klublawakmingguini[i]);
  }


/// nextttt while, do while
console.log("nextttt while, do while")
let i = 1;

while (i <= 7) {
  console.log(i);
  i++;
}

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 7);


// function 
console.log("functionnn")
function yooowassaapp(name) {
    console.log("yooowassaapp bro, " + name + "!");
  }
  
  yooowassaapp("ONANA");