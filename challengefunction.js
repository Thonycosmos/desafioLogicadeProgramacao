// Function to calculate the match balance and determine the player's rank
function calculateRank(wins, losses) {
    // Calculate the match balance
    let winBalance = wins - losses;
    
    // Variable to store the player's rank
    let rank = '';
  
    // Determine the rank based on the number of wins
    if (wins < 10) {
      rank = 'Iron';
    } else if (wins >= 11 && wins <= 20) {
      rank = 'Bronze';
    } else if (wins >= 21 && wins <= 50) {
      rank = 'Silver';
    } else if (wins >= 51 && wins <= 80) {
      rank = 'Gold';
    } else if (wins >= 81 && wins <= 90) {
      rank = 'Diamond';
    } else if (wins >= 91 && wins <= 100) {
      rank = 'Legendary';
    } else if (wins >= 101) {
      rank = 'Immortal';
    }
  
    // Return a message with the win balance and rank
    return `The Hero has a win balance of ${winBalance} and is at the rank of ${rank}.`;
  }
  
  // Test the function with different values for wins and losses
  let wins = 35;  // number of wins
  let losses = 10;  // number of losses
  
  // Call the function and store the result
  let result = calculateRank(wins, losses);
  
  // Display the result in the console
  console.log(result);
  