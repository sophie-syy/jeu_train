class Rail {
    constructor(element) {
        this.element = element;
        this.isVertical = element.classList.contains("vertical");
    }

    toggle() {
        this.isVertical = !this.isVertical;

        this.element.classList.toggle("vertical");
        this.element.classList.toggle("horizontal");
    }
}

class Train {
    constructor(element) {
        this.element = element;
    }

    changeColor() {
        const randomColor = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

        this.element.style.backgroundColor = randomColor;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const train = new Train(document.getElementById("train"));

    const rails = {};
    document.querySelectorAll(".rail").forEach(rail => {
        rails[rail.id] = new Rail(rail);
    });

    document.querySelectorAll(".circle").forEach(button => {

        let isDown = true;

        button.addEventListener("click", () => {

            const img = button.querySelector("img");
            img.src = isDown
                ? "./ressources/up.png"
                : "./ressources/down.png";

            isDown = !isDown;

            train.changeColor();

            const railId = button.dataset.rail;
            rails[railId].toggle();
        });
    });
});
