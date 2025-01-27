window.onload = function () {
    console.log("JavaScript caricato correttamente!");
    var display = document.getElementById("display");
    var buttons = document.getElementsByTagName("button");

    var currentInput = "";

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var value = this.value;

            if (value === "=") {
                try {
                    currentInput = eval(currentInput); // Calcola l'input
                    display.value = currentInput;
                } catch (e) {
                    display.value = "Errore";
                    currentInput = "";
                }
            } else if (value === "C") {
                currentInput = ""; // Cancella tutto
                display.value = "";
            } else {
                currentInput += value; // Aggiungi l'input
                display.value = currentInput;
            }
        };
    }
};
