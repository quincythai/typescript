"use strict";
// Original JS
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// 1st variation
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }
// 2nd variation -- better by using type assertions
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
// Reflection:
// Multi lines with union assignment must use let instead of const.
// Never use "as unknown as string", instead use a method to convert it to desired type like .toString()
// Try to be as specific as possible (Element -> HTMLElement -> HTMLSpanElement)
