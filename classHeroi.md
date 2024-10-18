// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para exibir o ataque conforme o tipo do herói
  atacar() {
    let ataque;

    // Estrutura de decisão para determinar o ataque baseado no tipo
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'fez um ataque desconhecido';
    }

    // Exibe a mensagem final do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso com o herói monge
const heroiMonge = new Heroi('Iroh', 40, 'monge');
heroiMonge.atacar();  // Saída: O monge atacou usando artes marciais