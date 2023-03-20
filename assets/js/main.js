// Creo una variabile dove salvo il container delle celle 
const playButton = document.querySelector(".rounded-3.p-0.px-2");
const testSelect = document.getElementById('difficulty');
const container = document.querySelector(".container");


playButton.addEventListener("click", function() {
    container.innerHTML = "";
    if (testSelect.value == 'diff_1') {
        const container = document.querySelector(".container");

        let cell_number = 100;

        for (let i = 1; i <= cell_number; i++) {
            const cell = `<div class="cell">${i}</div>`;
            container.innerHTML += cell;
        }

        const cellEl = document.querySelectorAll(".cell");
        const bombI = [];
  
  
        while (bombI.length < 16) {
            const randomI = Math.floor(Math.random() * cellEl.length);
            if (!bombI.includes(randomI)) {
            bombI.push(randomI);
            }
        }


        for (let i = 0; i < bombI.length; i++) {
            const thisCell = cellEl[bombI[i]];
            thisCell.classList.add("bomb");
        }
        

        for (let i = 0; i < cellEl.length; i++) {
            const thisCell = cellEl[i];
            console.log(thisCell);
            thisCell.addEventListener("click", function() {
            if (thisCell.classList.contains("bomb")) {
                thisCell.classList.toggle("bg_red");
                console.log('Hai perso');
                const banner = document.createElement("div");
                banner.classList.add("banner");

                const message = document.createElement("h3");
                message.textContent = "Hai perso!";

                const points = document.createElement("p");
                points.textContent = "Punti = ";

                const restartButton = document.createElement("button");
                restartButton.textContent = "Restart";
                restartButton.classList.add("restart-button");

                banner.appendChild(message);
                banner.appendChild(points);
                banner.appendChild(restartButton);
                restartButton.addEventListener("click", function() {
                    location.reload();
                });
                const body = document.querySelector("body");
                body.appendChild(banner);
            }
            thisCell.classList.toggle("bg_blue");
            console.log(i + 1);    
        })
        }

    } else if (testSelect.value == 'diff_2'){
        const container = document.querySelector(".container");

        let cell_number = 81;

        for (let i = 1; i <= cell_number; i++) {
            let cell = `<div class="cell_diff_2">${i}</div>`;
            container.innerHTML += cell;
        }

        const cellEl = document.querySelectorAll(".cell_diff_2");

        for (let i = 0; i < cellEl.length; i++) {
            const thisCell = cellEl[i];
            console.log(thisCell);
            thisCell.addEventListener("click", function() {
            thisCell.classList.toggle("bg_blue");
            console.log(i + 1);    
        })
        }
    } else {
        const container = document.querySelector(".container");

        let cell_number = 49;

        for (let i = 1; i <= cell_number; i++) {
            let cell = `<div class="cell_diff_3">${i}</div>`;
            container.innerHTML += cell;
        }

        const cellEl = document.querySelectorAll(".cell_diff_3");

        for (let i = 0; i < cellEl.length; i++) {
            const thisCell = cellEl[i];
            console.log(thisCell);
            thisCell.addEventListener("click", function() {
            thisCell.classList.toggle("bg_blue");
            console.log(i + 1);    
        })
        }
    }
});

