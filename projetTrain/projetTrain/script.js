class Train {
    constructor(speed, x, y) {
        this.table_color = ['black', 'white', 'purple', 'green', 'yellow', 'orange', 'red', 'blue'];
        this.color = this.table_color[Math.floor(Math.random() * this.table_color.length)];
        this.position = {x, y};
        this.speed = speed; // vitesse
        this.status = false; // en mouvement?
        this.sens = false; // tourner?
        this.element = null; 
        this.sens_rail();
    }

    sens_rail() {
        document.querySelector(".circle").addEventListener('click', () => {
            console.log("tourner? " + !this.sens);
            this.sens = !this.sens;
        });
    }

    isTrainOnButton(buttonX = 200, buttonY = 170) {
        //Coordonnées du bouton (circle1): left: 200px; top: 170px;
        if(this.element.style.left == buttonX + 'px' && this.element.style.top == buttonY + 'px'){
            console.error("true");
            return true;
        }else{
            return false;
        };
        
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
        if(this.position.x == 200 && this.sens){
            this.moveToLeft();
        }else{
            this.moveToRight();
        }
        
    }

    moveToRight(x = 370) {
        // Mouvement du noir (50, 170) au vert (370, 170)
        if (this.position.x < x){
            this.position.x += this.speed;
            this.element.style.left = this.position.x + 'px';
            console.log("x " + this.position.x);
            requestAnimationFrame(() => this.run());  
        } else if(this.position.x == x){
            this.position.x = x;
            this.element.style.left = this.position.x + 'px';
            console.log("Train arrivé droite");
        }
    }

    moveToLeft(x = 200, y = 70) {
        // Mouvement du vert (370, 170) au violet (200, 70)
        // Horizontal d'abord
        if (this.position.x == x && this.position.y > y) {
            this.position.y -= this.speed;
            this.element.style.top = this.position.y + 'px';
            console.log("y " + this.position.y);
            requestAnimationFrame(() => this.run());
        }
         else {
            console.log("Train arrivé au violet");
        }
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

document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM Loaded");
    
    let trains = []; // Tableau pour stocker tous les trains
    
    trains.push(new Train(1, 50, 170));
    trains[0].spawn();
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    trains.push(new Train(1, 50, 170));
    trains[1].spawn();
    
    // Les deux trains restent maintenant
});