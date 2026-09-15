const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const colection = upper + lower + "1234567890áãàâäåæªéêèëėęēüúūùûóõôòöœøōºíîìįïī .,!?:;'\"*_$#@&-+()/{}[]=°^¥€¢£%©®™✓\\÷×~`§∆√π•|\n";

export function textToVintary(text) {
 var res = [];
 for (const letter of text) {
  let lerres = colection.indexOf(letter) + 1;
  if (lerres != 0) {
   res.push(lerres)
  };
 };
 return res.join(".")
};

export function vintaryToText(vint) {
 var res = "";
 var conv = vint.split(".");
 for (const num of conv) {
  let numb = Number(num);
  if (!Number.isNaN(numb)) {
   var letter = colection[numb - 1];
   if (letter != undefined) {
    res = res + letter;
   };
  };
 };
 return res;
};
