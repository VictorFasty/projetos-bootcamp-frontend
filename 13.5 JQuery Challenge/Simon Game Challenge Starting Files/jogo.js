// 1. Variáveis de Estado do Jogo
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// 2. Iniciando jogo, detecta a primeira tecla pressionada
$(document).keydown(function() {
  if (!started) {
    // Quando o jogo começa, altera o título e chama a primeira sequência
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// 3. Detetar Cliques nos Botões
$(".btn").click(function() {
  // Guarda o ID da cor que o utilizador clicou
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  // Executa o som e a animação de clique
  playSound(userChosenColour);
  animatePress(userChosenColour);

  // Verifica se o utilizador acertou a sequência (passando o índice do último clique)
  checkAnswer(userClickedPattern.length - 1);
});

// 4. Lógica de Verificação
function checkAnswer(currentLevel) {
  // Verifica se o usuario seguiu os padroes do jogo cliques 
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    
    // Se acertou o clique, verifica se já terminou a sequência deste nível e da sequencia para o proximo
    if (userClickedPattern.length === gamePattern.length) {
      // Espera 1 segundo e gera a próxima cor
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    // SE ERRAR: Game Over
    playSound("wrong");

    // Efeito visual de erro no fundo (body)
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    // Reinicia o estado do jogo
    startOver();
  }
}

// 5. Gerar a Próxima Sequência
function nextSequence() {
  // Reinicia os cliques do utilizador para o novo nível
  userClickedPattern = [];
  
  level++;
  $("#level-title").text("Level " + level);

  // Escolhe uma cor aleatória
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animação de flash no botão sorteado
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
  // Som da cor sorteada
  playSound(randomChosenColour);
}

// 6. Funções Auxiliares (Sons e Animações)
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// 7. Reiniciar o Jogo pos game over(Reset)
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}