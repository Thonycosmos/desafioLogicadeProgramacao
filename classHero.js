// Definindo a classe Heroi
class HeroAdventure {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    // Método para exibir o ataque conforme o tipo do herói
    attack() {
      let attack;
  
      // Estrutura de decisão para determinar o ataque baseado no tipo
      switch (this.type) {
        case 'mago':
          attack = 'usou magia';
          break;
        case 'guerreiro':
          attack = 'usou espada';
          break;
        case 'monge':
          attack = 'usou artes marciais';
          break;
        case 'ninja':
          attack = 'usou shuriken';
          break;
        default:
          attack = 'fez um ataque desconhecido';
      }
  
      // Exibe a mensagem final do ataque
      console.log(`O ${this.type} atacou usando ${attack}`);
    }
  }
  
  // Exemplo de uso com o herói monge
  const heroiMonge = new HeroAdventure('Iroh', 40, 'monge');
  heroiMonge.attack();  // Saída: O monge atacou usando artes marciais