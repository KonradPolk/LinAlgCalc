document.addEventListener("DOMContentLoaded", (event) => {
    const princess = document.getElementById('princess');
    const fire = document.getElementById('fire');
    const button = document.querySelector('.btn');
    const info = document.querySelector('.container');
    const warning = document.querySelector('.warning');
    const breach = document.querySelector('.breach');


    let position = 0;
    let hasLost = false;

    princess.ondragstart = function() { return false; };
    fire.ondragstart = function() { return false; };

    let gameStarted = false;

    button.addEventListener('click', () => {
        // console.log("hello")
        info.style.display = "none";
        warning.style.display = "flex"
    });

    const warnElement = document.querySelector('.warn');
    
    // Wait for the animations to complete before hiding the warning
    warnElement.addEventListener('animationend', (event) => {
        if (event.animationName === 'pulse') {
            // console.log("pallas")
            document.querySelector('.warning').style.display = 'none';


            princess.style.display = "inline-block"
            fire.style.display = "inline-block"
    
            const intervalId = setInterval(() => {
                // console.log("hello")
                position += 5; // Move 5vw to the right
                if (position <= 80) {
                    princess.style.marginLeft = `${position}vw`;
                }
                else {
                    // alert("you lost")
                    princess.style.display = "none"
                    fire.style.display = "none"

                    breach.style.display = "flex"

                    hasLost = true;
                    clearInterval(intervalId)
                }
            }, 650);
    
            princess.addEventListener('click', (event) => {
                if (hasLost == false) {
                    position -= 0.85;
                    princess.style.marginLeft = `${position}vw`;
                }
            });
        }
    });

});