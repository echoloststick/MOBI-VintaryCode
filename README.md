# MOBI-VintaryCode
Learn about the Vintary-Code and use our converter.

`Vintary Code` is a text conversion system based on a fixed character collection. Each character is assigned a numerical value according to its position within the collection.

The character collection contains uppercase and lowercase letters, numbers, spaces, punctuation, mathematical symbols, currency symbols, and other special characters:

```js
const colection =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" +
  "1234567890 .,!?:;'\"*_$#@&-+()/{}[]=°^¥€¢£%©®™✓\\÷×~`§∆√π•|";
```
When converting text to Vintary, each character is searched within this collection and its position is converted into a numerical value. The values are separated by periods (".") to create the final Vintary sequence.

The conversion is based on the character's index:

colection.indexOf(letter) + 1

The "+1" shifts JavaScript's zero-based index so that the first character is represented by "1".

The reverse conversion splits the Vintary sequence by periods, converts each value back into an index, and retrieves the corresponding character from the same collection.

Vintary Code provides two main functions: "textToVintary()", which encodes text into Vintary, and "vintaryToText()", which decodes a Vintary sequence back into text. Both operations rely on the exact same character collection, making its order an essential part of the encoding system.
