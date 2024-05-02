function akarPangkat2(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    } else {
      return Math.sqrt(x);
    }
  }
  const prompt = require('prompt-sync')({ sigint: true });
  let userInput = prompt("Masukkan bilangan genap positif:");
  
  let result = akarPangkat2(userInput);
  console.log(result);
  