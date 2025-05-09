// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  let valorvalido = parseInt(valor)

  if (valorvalido != valor){
    return "Valor inválido"
  }

  return valorvalido
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };