const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "lizard"],
  scissors: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

const jugar = (userChoise) => {
  const Choise = choises[Math.floor(Math.random() * choises.length)];

  console.log("La opcion nuestra: ",userChoise);
  console.log("La opcion aleatoria: ",Choise);

  if (userChoise === Choise) {
    console.log("Empate");
    return;
  }
  
  if (rules[userChoise].includes(Choise)) {
    console.log("Ganastes");
    
    return;
    
  }
    console.log("Perdistes");
    return;
  
  
}

jugar("spock")