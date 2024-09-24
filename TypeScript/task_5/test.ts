import { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits } from './js/main';

// Exemple d'objets pour les crédits majeurs et mineurs
const major1: MajorCredits = { credits: 10, brand: "CS" };
const major2: MajorCredits = { credits: 15, brand: "CS" };

const minor1: MinorCredits = { credits: 5, brand: "Math" };
const minor2: MinorCredits = { credits: 3, brand: "Math" };

// Tester la fonction sumMajorCredits
const totalMajorCredits = sumMajorCredits(major1, major2);
console.log("Total Major Credits:", totalMajorCredits); // Devrait afficher : { credits: 25, brand: "major" }

// Tester la fonction sumMinorCredits
const totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log("Total Minor Credits:", totalMinorCredits); // Devrait afficher : { credits: 8, brand: "minor" }