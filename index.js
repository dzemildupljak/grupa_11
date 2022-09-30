// dan = "HELLO WORLD";

// if (dan === 1) {
//   console.log("ponedeljak");
// } else if (dan === 2) {
//   console.log("utorak");
// } else if (dan === 3) {
//   console.log("sreda");
// } else if (dan === 4) {
//   console.log("cetvrtak");
// } else if (dan === 5) {
//   console.log("petak");
// } else {
//   console.log("vikend");
// }

// br1 = Number(prompt("Unesite br1:"));
// br2 = Number(prompt("Unesite br2:"));

// zbir = br1 + br2;

// if (br1 + br2 >= 20) {
//   console.log("Zbir je veci od 20");
// } else {
//   console.log("Zbir je manji ili jednak 20");
// }

// br1 = Number(prompt("Unesite br1:"));
// br2 = Number(prompt("Unesite br2:"));

// if (br1 * br2 === br1 + br2) {
//   console.log("Jednaki su prozivod i suma");
// } else {
//   console.log("Nisu jednaki su prozivod i suma");
// }

// operacija = Number(prompt("uneste operaciju: (1-sabiranje)"));
// br1 = Number(prompt("Unesite br1:"));
// br2 = Number(prompt("Unesite br2:"));

// if (operacija === 1) {
//   console.log(br1 + br2);
// } else {
//   console.log(br1 * br2);
// }

// br1 = Number(prompt("Unesite br1:"));
// br2 = Number(prompt("Unesite br2:"));

// if (br1 && br2) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// dayNum = 123123;
// day = "";

// switch (dayNum) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     day = "Friday";
//   case 6:
//     day = "Saturday";
//     console.log("SUBOTA!!!");
//     console.log("SUBOTA!!!");
//     console.log("SUBOTA!!!");
//     console.log("SUBOTA!!!");
//     console.log("SUBOTA!!!");
//     console.log("SUBOTA!!!");
//     break;
//   default:
//     day = "pogresan broj";
//     break;
// }

// console.log(day);

// brSati = 14;

// switch (true) {
//   case brSati < 0:
//     console.log("Pogresan unos");
//     break;
//   case brSati < 10:
//     console.log("JUTRO!!");
//     break;
//   case brSati < 12:
//     console.log("PODNE!!");
//     break;
//   case brSati < 18:
//     console.log("PREVECE!!");
//     break;
//   case brSati < 20:
//     console.log("VECE!!");
//     break;
//   case brSati < 24:
//     console.log("NOC!!");
//     break;
//   default:
//     console.log("Pogresan unos===");
//     break;
// }

// br1 = 23;
// br2 = 53;
// br3 = 54;

// if (br1 >= br2 && br2 >= br3) {
//   // br1 >= br2 >= br3
//   console.log(br1, br2, br3);
// } else if (br1 >= br3 && br3 >= br2) {
//   // br1 >= br3 >= br2
//   console.log(br1, br3, br2);
// } else if (br2 >= br1 && br1 >= br3) {
//   // br2 >= br1 >= br3
//   console.log(br2, br1, br3);
// } else if (br2 >= br3 && br3 >= br1) {
//   // br1 >= br3 >= br2
//   console.log(br2, br3, br1);
// } else if (br3 >= br1 && br1 >= br2) {
//   // br3 >= br1 >= br2
//   console.log(br3, br1, br2);
// } else if (br3 >= br2 && br2 >= br1) {
//   // br3 >= br2 >= br1
//   console.log(br3, br2, br1);
// } else {
//   console.log("Pogresan unos");
// }

mesec = 4;
if (mesec > 0 && mesec < 13) {
  switch (mesec) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("Ima 31 dan");
      break;
    case 2:
      console.log("Ima 28/9 dan");
      break;
    default:
      console.log("Ima 30 dan");
      break;
  }
} else {
  console.log("pogresan unos");
}
