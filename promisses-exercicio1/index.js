const fs = require("fs/promises");

const somar =  (numeroA, numeroB) => {
  return new Promise((resolve, reject) => {
    if (!(typeof numeroA == "number" && typeof numeroB == "number")) {
      return reject("Não são numeros");
    }
    resultado = numeroA + numeroB;

    try {
      fs.appendFile(
        "resultado-soma.txt",
        `${numeroA} + ${numeroB} = ${resultado} \n`
      ).then(console.log(resultado));
      resolve(resultado);
    } catch {
      console.log("Deu zica no arquivo!");
    }
  });
};

somar(45, '20').catch((error) => console.log(error));
somar(45, 100).catch((error) => console.log(error));
somar(1, 'a').catch((error) => console.log(error));
somar('b', '1').catch((error) => console.log(error));
somar(80, 10).catch((error) => console.log(error));
