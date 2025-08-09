let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");
let screenValue = '';


for (let item of buttons) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        console.log("click", buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = '';
        }

        else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            }
            catch {
                screen.value = "Error";
                screenValue = '';
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}






