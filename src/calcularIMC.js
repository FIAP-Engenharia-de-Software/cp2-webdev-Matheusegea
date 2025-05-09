// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let formulaIMC = peso / (altura * altura)
  if(typeof peso !== Number || typeof altura !== Number || peso <= 0 || altura <= 0){
    return "Erro"
  }
  if (formulaIMC < 18.5) {
    return "Abaixo do peso"
  }
  else if (formulaIMC >= 18.5 && formulaIMC <= 24.9){
    return "Peso normal"
  }
  else if (formulaIMC >= 25 && formulaIMC <= 29.9) {
    return "Sobrepeso"
  }
  else if (formulaIMC >= 30){
    return "Obesidade"
  }
  
  
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };