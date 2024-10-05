// Função para calcular o saldo de partidas e determinar o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calcular saldo de partidas
    let saldoVitorias = vitorias - derrotas;
    
    // Variável para armazenar o nível do jogador
    let nivel = '';
  
    // Determinação do nível com base no número de vitórias
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else if (vitorias >= 101) {
      nivel = 'Imortal';
    }
  
    // Retorna uma mensagem com saldo de vitórias e nível
    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
  }
  
  // Testar a função com diferentes valores de vitórias e derrotas
  let vitorias = 35;  // número de vitórias
  let derrotas = 10;  // número de derrotas
  
  // Chamar a função e armazenar o resultado
  let resultado = calcularRank(vitorias, derrotas);
  
  // Exibir o resultado no console
  console.log(resultado);
  