// 1. Define o número de botões (Correto)
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Armazena a NodeList fora do loop para maior eficiência
const drumButtons = document.querySelectorAll(".drum");


// 2. Loop para cliques
for (var i = 0; i < numberOfDrumButtons; i++) {
    // Adiciona o listener ao botão [i]
    drumButtons[i].addEventListener("click", function() {
        
        // 'this' se refere ao botão clicado
        var buttonKey = this.innerHTML; 
        makeSound(buttonKey); 
    }); // Fecha o addEventListener
} // Fecha o loop for


// 3. Listener do Teclado (Correto)
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});


// 4. Função Executor 
function makeSound(key) {
    switch(key) {
        case "w":
            var tom1 = new Audio('./sounds/tom1.mp3'); 
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('./sounds/kick.mp3');
            kick.play();
            break;
        default:
    }

    function buttonanimation() {

        
    }
}
