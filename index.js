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

// mesec = 4;
// if (mesec > 0 && mesec < 13) {
//   switch (mesec) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log("Ima 31 dan");
//       break;
//     case 2:
//       console.log("Ima 28/9 dan");
//       break;
//     default:
//       console.log("Ima 30 dan");
//       break;
//   }
// } else {
//   console.log("pogresan unos");
// }

// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

// for (let mojaVar = 0; mojaVar < 10; mojaVar++) {
//   console.log("Hello world");
// }

// for (let mojaVar = 0; mojaVar < 10; mojaVar++) {
//   console.log("Hello world", mojaVar);
// }
// for (i = 6; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   // if (i === 7) {
//   // continue;
//   // }
//   // console.log(i);

//   if (i !== 7) {
//     console.log(i);
//   }
// }
// var numSum = 0;

// for (let i = 0; i < 21; i += 2) {
//   numSum = Number(numSum) + i;
//   console.log("Nakon broja", i, "suma je", numSum);
// }

// for (let i = 0; i < 21; i++) {
//   if (i % 2 === 0) {
//     numSum = numSum + i;
//     console.log("Nakon broja", i, "suma je", numSum);
//   }
// }

// console.log(numSum);

// for (let i = 0; i < 6; i++) {
//   if (i < 3) {
//     console.log("Pyhton");
//     continue;
//   }

//   console.log("Je super");
// }

// for (i = 0; i < 10; i++) {
//   console.log("Helo wordl");
//

// brojUnesenihBrojeva = Number(prompt("Unesite broj brojeva"));

// brParnih = 0;
// brNeparnih = 0;

// sumParnih = 0;
// sumNeparnih = 0;

// for (let i = 0; i < brojUnesenihBrojeva; i++) {
//   broj = Number(prompt("Unesite broj: "));
//   if (broj % 2 === 0) {
//     brParnih += 1;
//     sumParnih += broj;
//   } else {
//     brNeparnih += 1;
//     sumNeparnih += broj;
//   }
// }

// console.log("Imamo", brParnih, "parnih brojeva i njihova suma je", sumParnih);
// console.log(
//   "Imamo",
//   brNeparnih,
//   "neparnih brojeva i njihova suma je",
//   sumNeparnih
// );

// brojIteracija = 5;

// while (brojIteracija > 0) {
//   console.log("PETLJA!!!!!");
//   brojIteracija--;
// }

// sifra = "sifra123";

// korSifra = "";

// while (korSifra !== sifra) {
//   korSifra = prompt("Unesite sifru");
// }

// console.log("Tacna sifra");

// goalNum = Math.floor(Math.random() * 100);
// goalNum = 10;

// number = null;

// while (number !== 0) {
//   number = Number(prompt("Unesite broj:"));

//   if (number === goalNum) {
//     console.log("Uneli ste tacan broj");
//     break;
//   }

//   if (number > goalNum) {
//     console.log("Prevelik broj");
//   } else {
//     console.log("Premali broj");
//   }
// }

// mojArr = ["ime1", "ime2", "ime3", "ime4", "ime5", "ime6"];

// console.log(mojArr);

// mojaVAr = mojArr.pop();

// console.log(mojArr);

// console.log(mojaVAr);

// mojarr = [2, 3, 432, 532, 532, 4, 324, 324, 3];

// for (let i = 0; i < 10; i++) {
//   unos = Number(prompt("Unesite broj:"));
//   mojarr.push(unos);
// }

// for (let i = 0; i < mojarr.length; i++) {
//   if (mojarr[i] % 2 === 0) {
//     console.log(mojarr[i]);
//   }
// }

// mojarr = [2, 3, 432, 532, 532, 4, 324, 324, 3];
// niz = [];
// for (i = 0; i < mojarr.length; i++) {
//   if (mojarr[i] % 2 === 0) niz.push(mojarr[i]);
// }
// console.log(niz);

// arr = ["hello", 1, 23, 213, false, [3, 4, 64]];

// mat = [
//   [34, 45, 67],
//   [78, 45, 23],
//   [65, 32, 87],
// ];

// for (let i = 0; i < mat.length; i++) {
//   red = "";
//   for (let j = 0; j < mat[i].length; j++) {
//     red += mat[i][j] + "[" + i + "]" + "[" + j + "]  ";
//   }
//   console.log(red);
// }

// for (let i = 0; i < mat.length; i++) {
//   red = "";
//   for (let j = 0; j < mat[i].length; j++) {
//     if (i + j === mat[i].length - 1) {
//       red += mat[i][j] + " ";
//     } else {
//       red += "   ";
//     }
//   }
//   console.log(red);
// }

// 34 56 23
// 78 45 23
// 65 32 87

// 34
//    45
//       87

//       23
//    45
// 65

// arr = [25, 45, 55, 77, 88, 99];

// suma = 0;
// for (let i = 0; i < arr.length; i++) {
//   suma += arr[i];
// }

// averageValue = suma / arr.length;

// console.log(averageValue);

// suma = 0;
// for (let i = 0; i < niz.length; i++) {
//   suma += arr[i];
// }

// function nazivFunckije() {
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!!");
//   console.log("funckijaaaa!!! NOVA PROMENA");
//   console.log("=================================");
// }

// nazivFunckije = require("./funcija");

// let br1 = 10;
// let br2 = 14;

// nazivFunckije(br1, br2);
// nazivFunckije(999, 12312);

// function evenOdd(myBr) {
//   if (myBr % 2 === 0) {
//     console.log("broj je paran");
//   } else {
//     console.log("broj je neparan");
//   }
// }

// unos = 232;

// evenOdd(unos);
// evenOdd(23);
// evenOdd(233);

// 6. Write a function to reverse a number
//
// 9. Write a function to check if an input string is a palindrome

// mojarr = [2, 3, 432, 532, 532, 4, false, "hello", 3];
// //        0  1  2     3    4   5   6         7

// for (let i = 0; i < mojarr.length; i++) {
//   console.log(mojarr[i]);
// }

// mat = [
//   [34, 45],
//   [78, 45],
// ];

// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat[i].length; j++) {
//     console.log(mat[i][j]);
//   }
// }

// mojaRec = "anavolimilovana";

// for (let i = 0; i < mojaRec.length / 2; i++) {
//   console.log(mojaRec[i], mojaRec[mojaRec.length - 1 - i]);
//   console.log(i, mojaRec.length - 1 - i);

//   if (mojaRec[i] !== mojaRec[mojaRec.length - 1 - i]) {
//     console.log("NIJE PALINDROM");
//     break;
//   }
// }

// function mojaFunc(arg1) {
//   console.log("neki posao");
//   console.log("neki posao");
//   console.log("neki posao");
//   console.log("neki posao");
//   return arg1 * 5;
// }

// mojaFunc(4);

// function mojaVar(arg1) {
//   console.log("asdasd");
//   console.log("asdasd");
//   console.log("asdasd");
//   console.log("asdasd");
//   console.log("asdasd");
//   arg1();
// }

// function drugaFunc() {
//   console.log("druga func");
// }

// mojaVar(drugaFunc);

// function cunstomSlice(arr, startIndex, endIndex) {
//   if (!startIndex) {
//     startIndex = 0;
//   }
//   if (!endIndex) {
//     endIndex = arr.length;
//   }
//   myArr = [];

//   for (let i = startIndex; i < endIndex; i++) {
//     myArr.push(arr[i]);
//   }

//   return myArr;
// }

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// subArr = cunstomSlice(animals);

// console.log(subArr);

// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// myNumber = 79;

// if (isPrime(myNumber)) {
//   console.log("broj je prost");
// } else {
//   console.log("broj nije prost");
// }

// function amountTocoins(number) {
//   appReturn = [];

//   while (number > 0) {
//     if (number >= 25) {
//       number = number - 25;
//       appReturn.push(25);
//     } else if (number >= 10) {
//       number = number - 10;
//       appReturn.push(10);
//     } else if (number >= 5) {
//       number = number - 5;
//       appReturn.push(5);
//     } else if (number >= 2) {
//       number = number - 2;
//       appReturn.push(2);
//     } else if (number >= 1) {
//       number = number - 1;
//       appReturn.push(1);
//     }
//   }

//   return appReturn;
// }

// res = amountTocoins(46);
// console.log(res);

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 29,
// ];

// function binSearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let centar = Math.floor((start + end) / 2);

//     if (target === arr[centar]) {
//       console.log("centar je target", centar);
//       return true;
//     }
//     if (target < arr[centar]) {
//       end = centar - 1;
//     } else {
//       start = centar + 1;
//     }
//   }

//   return false;
// }

// mojaVar = binSearch(arr, 17);

// console.log(mojaVar);

// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

// 09283d9q8ud9q80dia9a

// function generateWord(wordLen) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   const max = chars.length - 1;

//   let word = "";

//   for (let i = 0; i < wordLen; i++) {
//     radnIndex = Math.floor(Math.random() * max);
//     word += chars[radnIndex];
//   }

//   console.log(word);
// }

// generateWord(30);

// Bubble sort Implementation using Javascript
// Bubble sort Implementation using Javascript
// function bblSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   console.log(arr);
// }

// var arr = [234, 43, 55, 63, 5, 6, 232, 5];

// bblSort(arr);

//ow9j8a09ds
// user = {
//   age: 27,
//   password: "sifra12",
//   born: true,
//   location: "SRB",
//   username: "dzemil123123213",
// };

// user2 = { ...user };

// user.username = "daris";

// user2.location = "USA";

// console.log(user);

// console.log("=========================");

// console.log(user2);

// library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   if (library[i].readingStatus) {
//     console.log("book:", library[i].title);
//   } else {
//     console.log("does not read");
//   }
// }

// obj1 = {
//   title: "Walter Isaaasdsadsadasdsadsscson",
//   readingStatus: true,
//   nestoNovo: 12312,
// };

// obj2 = {
//   author: "Steve Jobs",
//   title: "Walter Isaacson",
//   readingStatus: true,
//   nestoNovo: 0,
// };

// console.log(obj1 === obj2);

// obj2 = {
//   author: "NEKI AUTHOR",
//   title: "Walter Isaaasdsadsadasdsadsscson",
//   readingStatus: true,
// };

// const { title, ...rest } = obj2;

// obj2 = { ...rest };

// console.log(obj2);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);

// class Car {
//   constructor(n, year) {
//     console.log("KREIRANJE NOVOG OBJEKTA");

//     this.carName = n;
//     this.carYear = year;
//     this.carAge = 2022 - year;
//   }
// }

// obj1 = new Car("FORD", 1990);

// console.log(obj1.carName);
// console.log(obj1.carYear);

// obj1.getYearOfCar(100);

// class Car {
//   constructor(s, b) {
//     this.speed = s;
//     this.brand = b;
//   }

//   acelerate(value) {
//     this.speed += value;
//   }

//   brake(value) {
//     this.speed -= value;
//   }

//   describe() {
//     console.log("This car is going ", this.speed, "km/h");
//   }
// }

// c1 = new Car(100, "audi");

// c1.describe();
// c1.acelerate(24);
// c1.describe();
// c1.brake(10);
// c1.describe();

class Product {
  constructor(n, p) {
    this.name = n;
    this.price = p;
    this.amount = 0;
  }
}

class ShopingCart {
  constructor() {
    this.products = [];
  }

  addPoductToCart(prod) {
    const check = { isExist: false, indx: undefined };

    this.products.forEach((p, i) => {
      if (p.name === prod.name) {
        check.isExist = true;
        check.indx = i;
      }
    });

    if (check.isExist) {
      this.products[check.indx].amount += 1;
    } else {
      prod.amount = 1;
      this.products.push(prod);
    }
  }

  totalPrice() {
    let totalPrice = 0;

    this.products.forEach((prod) => {
      totalPrice += prod.price * prod.amount;
    });

    if (this.products.length >= 5) {
      totalPrice -= totalPrice / 10;
    }

    return totalPrice;
  }
}

shopCart = new ShopingCart();
prod1 = new Product("bananica", 100);
prod2 = new Product("jaffa", 250);
prod3 = new Product("coca cola", 120);

shopCart.addPoductToCart(prod1);
shopCart.addPoductToCart(prod1);

shopCart.addPoductToCart(prod2);
shopCart.addPoductToCart(prod3);
console.log(shopCart);
console.log(shopCart.totalPrice());
