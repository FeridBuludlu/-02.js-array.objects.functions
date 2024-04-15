// !1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// function ededinHesablanmasi(eded) {
//     let reqemler = Array.from(String(eded), Number);
    
//     let cem = reqemler.reduce((a, b) => a + b, 0);
//     let hasil = reqemler.reduce((a, b) => a * b, 1);
    
//     let ortaIndex = Math.floor(reqemler.length / 2);
//     let ortaReqem;
    
//     if (reqemler.length % 2 === 0) {
//         ortaReqem = (reqemler[ortaIndex - 1] + reqemler[ortaIndex]) / 2;
//     } else {
//         ortaReqem = reqemler[ortaIndex];
//     }
    
//     return [cem, hasil, ortaReqem];
// }

// let eded = prompt("Bir 3 rəqəmli ədəd daxil edin:");

// let [cem, hasil, ortaReqem] = ededinHesablanmasi(parseInt(eded));

// console.log("Ədədin cəmi:", cem);
// console.log("Ədədin hasilı:", hasil);
// console.log("Ədədin ortası:", ortaReqem);


// !2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// function bolenleriTap(eded) {
//     let bolenler = [];
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             bolenler.push(i);
//         }
//     }
//     return bolenler;
// }

// let eded = prompt("Bir ədəd daxil edin:");

// let bolenler = bolenleriTap(parseInt(eded));

// console.log("Ədədin bölənləri:", bolenler);

// !3)Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// function bolenlerinSayi(eded) {
//     let say = 0;
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             say++;
//         }
//     }
//     return say;
// }

// let eded = prompt("Bir ədəd daxil edin:");

// let bolen_sayi = bolenlerinSayi(parseInt(eded));

// console.log("Ədədin bölənlərinin sayı:", bolen_sayi);

// !4)for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// for (let i = 0; i <= 10; i++) {
//     let hasil = i * i;
//     console.log(i + " x " + i + " = " + hasil);
// }

// !5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// for (let i = 0; i <= 10; i++) {
//     let hasilKvadrat = Math.pow(i, 2);
//     let hasilKub = Math.pow(i, 3);
//     console.log(i + "    " + hasilKvadrat + "     " + hasilKub);
// }

// !6) 0 - 100 arası yalnız sadə ədədləri console'da çap edin

// for (let i = 0; i <= 100; i++) {
//     if (i > 1 && Sade(i)) {
//         console.log(i);
//     }
// }

// function Sade(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// !7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let tekCem = 0;
// let cutCem = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         cutCem += i;
//     } else {
//         tekCem += i;
//     }
// }

// console.log("Tək ədədlərin cəmi:", tekCem);
// console.log("Cüt ədədlərin cəmi:", cutCem);

  
//!   #studentlərin ortalama score'nu yeni bir arrayda yığın

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//   ];
  
//   function ortalamaScoreHesabla(scores) {
//       let toplam = 0;
//       for (let i = 0; i < scores.length; i++) {
//           toplam += scores[i];
//       }
//       return toplam / scores.length;
//   }
  
//   let ortaScoresWithNames = [];
//   for (let i = 0; i < students.length; i++) {
//       let student = students[i];
//       let ortalama = ortalamaScoreHesabla(student.scores);
//       ortaScoresWithNames.push({ name: student.name, ortalamaScore: ortalama });
//   }
  
//   ortaScoresWithNames.sort((a, b) => a.ortalamaScore - b.ortalamaScore);
  
//   console.log(ortaScoresWithNames);


//!  # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];
  
//   const uzunElementler = webTechs.filter(element => element.length > 4);
  
//   console.log(uzunElementler);

//! # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  

//   const cem = products.reduce((total, product) => total + product.price, 0);

//   const ortalamaQiymet = cem / products.length;
  
//   console.log("Məhsulların qiymətlərinin cəmi:", cem.toFixed(2));
//   console.log("Ortalama qiymət:", ortalamaQiymet.toFixed(2));
  


//! countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// const a_ile_baslayib_biten_olkeler = countries.filter(country => country.toLowerCase().startsWith('a') && country.toLowerCase().endsWith('a'));

// console.log(a_ile_baslayib_biten_olkeler);

//! # Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function  findNumberOfDivisors(eded) {
//     let say = 0;
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             say++;
//         }
//     }
//     return say;
// }

// let eded = prompt("Bir ədəd daxil edin:");

// let bolen_sayi =  findNumberOfDivisors(parseInt(eded));

// console.log("Ədədin bölənlərinin sayı:", bolen_sayi);

//! daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// function findSpaceCounts(str) {
//     const spaceCount = (str.match(/ /g) || []).length;
//     return spaceCount;
// }

// const sentence = "Bu bir nümunə cümlədir";
// console.log("Cümlədəki boşluq sayı:", findSpaceCounts(sentence));

//! 1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir 

// function printFullName(firstName, lastName) {
//     return "I am " + firstName + " " + lastName;
// }
// console.log(printFullName("lorem", "ipsum"));

//! 2) daxil edilən ədədin kvadratını return edən funksiya yazın

// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }

// console.log(power(5, 2));

//!3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.


// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }

// console.log(sum(2, 3));       
// console.log(multiply(2, 3));   
// console.log(subtract(2, 3));   
// console.log(divide(2, 3));  

//!4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         default:
//             return "Düzgün operator daxil edilməyib";
//     }
// }

// console.log(calculator(2, 5, "+")); 
// console.log(calculator(2, 5, "*")); 
// console.log(calculator(2, 5, "/"));
// console.log(calculator(2, 5, "-")); 


//! 5) arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     return firstElement + lastElement;
// };
// console.log(getSum([1, 2, 3]));
// console.log(getSum([80, 5, 58, 17, 100])); 
// console.log(getSum([15, -500, 0, 50]));


//! 6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// const sumArray = (array) => {
//     return array.reduce((total, current) => total + current, 0);
// };
// console.log(sumArray([1, 2, 3, 4, 5]));


//! 7) arrayin daxilindəki max elementi return edən funksiya yazın


// const getMax = (array) => {
//     return Math.max(...array);
// };

// console.log(getMax([1, 2, 3, 4, 5]));

//! 8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin

// function filterEmployees(arr) {
//     return arr.filter(employee => employee.salary > 60000);
//   }
  
//   const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];
  
//   const filteredEmployees = filterEmployees(employees);
//   console.log(filteredEmployees);

//! 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın


// function findElement(arr, number) {
//     return arr.includes(number);
//   }

//   console.log(findElement([33, 28, 45, 17], 45)); 
//   console.log(findElement([33, 28, 45, 17], 38));

//!10) task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.


// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function countSpaces(text) {
//   let spaceCount = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === ' ') {
//       spaceCount++;
//     }
//   }
//   return spaceCount;
// }

// console.log(countSpaces(sampleNews));

//! 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.

// function concatArray(arr1, arr2) {
//     return arr1.concat(arr2);
//   }
  
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]));
  

//! 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.


// function array_filled(length, value) {
//     return Array(length).fill(value);
//   }
  
//   console.log(array_filled(6, 0));
  
// !13. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
// !3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// function move(array, fromIndex, toIndex) {
//     if (fromIndex > 0 || fromIndex >= array.length || toIndex < 0 || toIndex >= array.length || fromIndex === toIndex) {
//       return array;
//     }
  
//     const element = array.splice(fromIndex, 1)[0];
//     array.splice(toIndex, 0, element);
  
//     return array;
//   }
  
//   console.log(move([10, 20, 30, 40, 50], 0, 2));

//! 14. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.

// function range(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       result.push(i);
//     }
//     return result;
//   }
  
//   console.log(range(1, 4));
  

  