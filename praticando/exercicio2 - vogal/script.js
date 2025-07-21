function contarVogal(palavra) {
      const vogais = ["a", "e", "i", "o", "u"];
      let strMinuscula = palavra.toLowerCase();
      let contador = 0;

      for (let letra of strMinuscula) {
        if (vogais.includes(letra)) {
          contador++;
        }
      }

      return contador;
    }

    function mostrarResultado() {
      const entrada = document.getElementById("entrada").value;
      const resultado = contarVogal(entrada);
      document.getElementById("resultado").innerText =
        `A palavra "${entrada}" tem ${resultado} vogais.`;
    }
