"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: "major" };
}
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: "minor" };
}
