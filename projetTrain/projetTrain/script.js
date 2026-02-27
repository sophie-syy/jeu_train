class Train {
    constructor(speed, x, y) {
        this.table_color = ['black', 'white', 'purple', 'green', 'yellow', 'orange', 'red', 'blue'];
        this.color = this.table_color[Math.floor(Math.random() * this.table_color.length)];
        this.position = {x, y};
        this.speed = speed;
        this.status = false;
        this.destination = 'right';
        this.element = null;
    }

    spawn() {
        this.element = document.getElementById('train');
        
        if (!this.element) {
            console.error("L'élément #train n'existe pas dans le DOM");
            return;
        }

        this.element.style.width = '20px';
        this.element.style.height = '20px';
        this.element.style.borderRadius = '50%';
        this.element.style.backgroundColor = this.color;
        this.element.style.position = 'absolute';
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        this.element.style.zIndex = '10';
        
        console.log("couleur de trains:" + this.color);
        
        this.status = true;
        this.run();
    }

    run() {
        if (!this.status) return;

        if (this.destination === 'right') {
            this.moveToGreen();
        } else if (this.destination === 'left') {
            this.moveToPurple();
        }
    }

    moveToGreen() {
        // Mouvement du noir (50, 170) au vert (370, 170)
        if (this.position.x < 370) {
            this.position.x += this.speed;
            this.element.style.left = this.position.x + 'px';
            requestAnimationFrame(() => this.run());
        } else {
            this.position.x = 370;
            this.element.style.left = this.position.x + 'px';
            console.log("Train arrivé au vert");
        }
    }

    moveToPurple() {
        // Mouvement du vert (370, 170) au violet (200, 70)
        const targetX = 200;
        const targetY = 70;

        // Horizontal d'abord
        if (this.position.x > targetX) {
            this.position.x -= this.speed;
            this.element.style.left = this.position.x + 'px';
            requestAnimationFrame(() => this.run());
        }
        // Puis vertical
        else if (this.position.y > targetY) {
            this.position.y -= this.speed;
            this.element.style.top = this.position.y + 'px';
            requestAnimationFrame(() => this.run());
        } else {
            console.log("Train arrivé au violet");
        }
    }

    changeDestination(newDestination) {
        this.destination = newDestination;
    }

    sens() {
        
    }
}

class Connect {
    constructor(boutonElement, train) {
        this.enter = null;
        this.exit_1 = 'right';        // Sortie normale vers le vert
        this.exit_2 = 'left';       // Sortie alternative vers le violet
        this.touche = boutonElement;
        this.train = train;
        this.isActive = false;
        this.setupListener();
    }

    setupListener() {
        this.touche.addEventListener('click', () => {
            this.path();
        });
    }

    path() {
        // Vérifier si le train est sur le bouton (à proximité)
        if (this.isTrainOnButton()) {
            console.log("Train détecté sur le bouton ! Direction: " + this.exit_2);
            this.train.changeDestination(this.exit_2);
            this.isActive = true;
        }
    }

    isTrainOnButton() {
        // Coordonnées du bouton (circle1): left: 200px; top: 170px;
        const buttonX = 200;
        const buttonY = 170;
        const tolerance = 50; 

        const distance = Math.hypot(
            this.train.position.x - buttonX,
            this.train.position.y - buttonY
        );

        return distance < tolerance;
    }

    sens() {
        if (this.isTrainOnButton()) {
            return this.exit_2; 
        }
        return this.exit_1;
    }
}

class House {
    constructor() {
        this.table_color = ['black', 'white', 'purple', 'green', 'yellow', 'orange', 'red', 'blue'];
        this.color = this.table_color[Math.floor(Math.random() * this.table_color.length)];
        this.nb_pass;
        this.nb_total;
        this.door;
    }

    unique() {
        
    }

    control(train) {
        
    }
}

let train;
let connect;

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");
    
    // Créer et lancer la boule
    train = new Train(1, 50, 170);
    train.spawn();

    // Créer l'objet Connect qui contrôle les interactions
    const button = document.querySelector(".circle");
    connect = new Connect(button, train);
});