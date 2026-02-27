class Rail {
    constructor(element) {
        this.element = element;
        this.state = 0;
    }

    toggle() {
        this.state = (this.state + 1) % 3;

        if (this.state === 0) {
            this.element.className = "line vertical";
        }
        else if (this.state === 1) {
            this.element.className = "line horizontal";
        }
        else if (this.state === 2) {
            this.element.className = "line left";
        }
    }
}

class Train {
    constructor(element) {
        this.element = element;
    }

    changeColor() {
        const c = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

        this.element.style.backgroundColor = c;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const train = new Train(document.getElementById("train"));

    const rails = {};
    document.querySelectorAll(".line.vertical").forEach(rail => {
        rails[rail.id] = new Rail(rail);
    });

    const images = [
        "./ressources/up.png",
        "./ressources/right.png",
        "./ressources/down.png"
    ];

    document.querySelectorAll(".circle").forEach(button => {

        let state = 0;

        button.addEventListener("click", () => {
            state = (state + 1) % 3;

            const img = button.querySelector("img");
            img.src = images[state];
            train.changeColor();

            const railId = button.dataset.rail;
            rails[railId].toggle();
        });
    });
});
