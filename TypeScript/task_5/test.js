"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./js/main");
// Exemple d'objets pour les crédits majeurs et mineurs
var major1 = { credits: 10, brand: "CS" };
var major2 = { credits: 15, brand: "CS" };
var minor1 = { credits: 5, brand: "Math" };
var minor2 = { credits: 3, brand: "Math" };
// Tester la fonction sumMajorCredits
var totalMajorCredits = (0, main_1.sumMajorCredits)(major1, major2);
console.log("Total Major Credits:", totalMajorCredits); // Devrait afficher : { credits: 25, brand: "major" }
// Tester la fonction sumMinorCredits
var totalMinorCredits = (0, main_1.sumMinorCredits)(minor1, minor2);
console.log("Total Minor Credits:", totalMinorCredits); // Devrait afficher : { credits: 8, brand: "minor" }
