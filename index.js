"use strict";

// написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// регістр не враховувати (рахувати і великі і маленькі голосні)
// працюємо тільки з латинецею
// const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// не використовувати регулярні вирази!

// спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)

const vowels = "aeiuoy";

/**
 *
 * @param {string} string
 * @param {string} check
 * @returns {number}
 */
const getNumberOfSymbols = (string, check) => {
  if (typeof string !== "string" || typeof check !== "string") {
    throw new TypeError("arguments must be a string");
  }
  return string
    .toLowerCase()
    .split("")
    .filter((symbol) => check.toLowerCase().split("").includes(symbol)).length;
};

try {
  console.log(
    getNumberOfSymbols(
      "qwertyuiopasdfghjkzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM",
      vowels
    )
  );
} catch (error) {
  console.log(error);
}
