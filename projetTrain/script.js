class Train{
    constructor(speed){
        this.table_color = [black, white, purple, green, yellow, orange, red, blue];
        this.color = random_int(0, count(this.table_color)-1);
        this.position = false;
        this.speed = speed;
        this.status = false;
    }
    
    run(){
        
    }

    sens(){
        
    }
}

class connect{
    constructor(touche){
        this.enter;
        this.exit_1;
        this.exit_2;
        this.touche = touche;
    }

    path(){
        
    }
}

class House{
    constructor(){
        this.table_color = [black, white, purple, green, yellow, orange, red, blue];
        this.color = random_int(0, count(this.table_color)-1);
        this.nb_pass;
        this.nb_total;
        this.door;
    }

    unique(){
        
    }

    control(train){
        
    }

}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".circle");

    buttons.forEach(button => {
        const railId = button.dataset.rail;
        const rail = new Rail(railId);

        button.addEventListener("click", () => {
            rail.toggle();
            train.spawn_random_clors_on_rail();
        });
    });
});
