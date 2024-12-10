let storyStep = 0;

const storyData = [
  {
    text: "Oh não! está tendo uma guerra entre misto quentes e coxinhas. Oque você faz?",
    options: [
      { text: "Tentar resolver pacificamente e oralmente", nextStep: 2 },
      { text: "LANÇAR UMA BOMBA DE GÁS SONÍFERO BOTAR TODO MUNDO EM CALABOLSOS E MATAR DA FORMA MAIS BRUTAL POSSÍVEL", nextStep: 1 }
    ]
  },
  {
    text: "DO NADA SPAWNA O SHREK E TE DA 2 ESCOLHAS 999999999999999999999999999999999999999999999 R$ OU UMA CEBOLA. QUAL VOCÊ ESCOLHE",
    options: [
      { text: "CEBOLA", nextStep: 3 },
      { text: "999999999999999999999999999999999999999999999 R$", nextStep: 4 }
    ]
  },
  {
    text: "você tenta resolver pacificamente mas um misto quente te come no meio do discurso e você morre. FIM DE JOGO",
    options: []
  },
  {
    text: " O SHREK TE DA DESCARGA E VC VAI PARAR NA FESTA DELE E VOCÊ SOBREVIVE",
    options: []
  },
  {
    text: "O SHREK TE MATA POIS VC NÃO QUIS A CEBOLA DELE. FIM DE JOGO",
    options: []
  }
];

function chooseOption(optionIndex) {
  const currentStory = storyData[storyStep];
  const chosenOption = currentStory.options[optionIndex - 1];
  
  if (chosenOption) {
    storyStep = chosenOption.nextStep;
    updateStory();
  }
}

function updateStory() {
  const currentStory = storyData[storyStep];
  
  document.getElementById("story-text").textContent = currentStory.text;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  
  currentStory.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => chooseOption(index + 1);
    optionsDiv.appendChild(button);
  });
}

updateStory();