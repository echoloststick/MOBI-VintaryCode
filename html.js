import { textToVintary, vintaryToText } from "./vintary.js";

const text = document.querySelector(".phrase");
const vint = document.querySelector(".vintary");

text.addEventListener("input", function() {
 const content = text.value;
 vint.value = textToVintary(content);
});

vint.addEventListener("input", function() {
 const content = vint.value;
 text.value = vintaryToText(content);
});
