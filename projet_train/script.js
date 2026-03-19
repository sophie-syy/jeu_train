const LEVELS = {
    1: ENTRY_RAILS_1,
    2: ENTRY_RAILS_2,
    3: ENTRY_RAILS_3
};

const TIME = 120; // 2 * 60
const ZERO = 0;

let game = null;

function setLevel(level) {
    if (game) game.destroy();
    game = new Game(level);
    game.start();
}

// Remet à zéro tous les éléments de la carte HTML
function resetMap() {
    // Rails
    ['v1','v2','v3','v4','v5','v6','v7','v8','v9','v10','v11','v12'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.cssText = '';
    });
    // Aiguillages
    ['sw1','sw2','sw3','sw4','sw5','sw6','sw7','sw8','sw9','sw10','sw11'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.style.cssText = ''; el.innerHTML = ''; }
    });
    // Maisons
    ['black','purple','green','yellow','orange','white','red','blue',
     'pink','blueviolet','maroon','cyan','bisque'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.style.cssText = ''; el.innerHTML = ''; }
    });
}
///////////////////
class House {
    constructor(def) {
        this.el = document.getElementById(def.id);
        if (!this.el) return;
        this.el.style.cssText = `
            background: ${def.id};
            left: ${def.x}%;
            top: ${def.y}%;
            border: 3px solid rgba(255,255,255,0.3);
            color: rgba(0,0,0,0.7);
            position: absolute;
            width: 8%;
            aspect-ratio: 1;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5vmin;
        `;
    
        if (!this.el.querySelector('i')) {
            this.el.innerHTML = '<i class="fa-solid fa-house"></i>';
        }
    }
}

class Rail {
    constructor(def) {
        this.el = document.getElementById(def.id);
        if (!this.el) return;
        this.el.style.width  = def.width  + '%';
        this.el.style.height = def.height + '%';
        this.el.style.left   = def.x      + '%';
        this.el.style.top    = def.y      + '%';
    }
}

class Switch {
    constructor(def) {
        this.el = document.getElementById(def.id);
        if (!this.el) return;
        this.el.style.cssText = `
            left: ${def.x}%;
            top: ${def.y}%;
            position: absolute;
            width: 5%; aspect-ratio: 1;
            border-radius: 50%;
            border: 3px solid #3498db;
            background: rgba(255,255,255,0.95);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2vmin;
            font-weight: bold;
            z-index: 20;
            transition: all 0.2s ease;
            color: #2c3e50;
            user-select: none;
        `;

        if (!this.el.querySelector('span')) {
            this.el.innerHTML = '<span>→</span>';
        }

        this.xPercent = def.x;
        this.yPercent = def.y;
        this.allowed = [...new Set(def.allowed)];
        this.dirIndex = 0;
        this.state = this.allowed[0];
        this.arrows = { right: '→', up: '↑', down: '↓', left: '←' };
        this._updateDisplay();
        this.el.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.dirIndex = (this.dirIndex + 1) % this.allowed.length;
        this.state    = this.allowed[this.dirIndex];
        this._updateDisplay();
    }

    _updateDisplay() {
        const span = this.el.querySelector('span');
        if (span) span.textContent = this.arrows[this.state];
    }

    reset() {
        this.dirIndex = 0;
        this.state    = this.allowed[0];
        this._updateDisplay();
    }

    removeListeners() {
        if (this.el && this._handler)
            this.el.removeEventListener('click', this._handler);
    }
}

class Train {
    constructor(container, carte) {
        this.container = container;
        this.x         = carte.xStart;
        this.y         = carte.y;
        this.direction = carte.sens;
        this.speed     = 0.12;
        this.active    = true;
        this._lastSw   = null;
        //this.house = table.house; pas besoin 

        this.pendingDirection  = null;
        this.directionDelay    = 0;
        this.directionDelayMax = 20;

        this.dest = carte.house[Math.floor(Math.random() * carte.house.length)];

        this.el = document.createElement('div');
        this.el.className = 'train-unit';
        this.el.style.cssText = `
            position: absolute; width: 5%; aspect-ratio: 2/1.2;
            border-radius: 3px 6px 3px 3px; z-index: 10;
            display: flex; align-items: center; justify-content: center;
            font-size: 2.5vmin;
            background: ${this.dest.id};
            box-shadow: 0 4px 20px ${this.dest.id}99;
        `;
        this.el.innerHTML = '<i class="fa-solid fa-train-subway"></i>';
        this.container.appendChild(this.el);
        this.render();
    }

    move() {
        const s = this.speed;
        if (this.direction === 'right') this.x += s;
        else if (this.direction === 'left') this.x -= s;
        else if (this.direction === 'up') this.y -= s;
        else if (this.direction === 'down') this.y += s;
    }

    isOutOfBounds() {
        return this.x > 105 || this.x < -10 || this.y < -5 || this.y > 105;
    }

    hasReachedDestination() {
        if (this.direction === 'up'    && this.y <= 8)  return true;
        if (this.direction === 'down'  && this.y >= 85) return true;
        if (this.direction === 'left'  && this.x <= 4)  return true;
        if (this.direction === 'right' && this.x >= 88) return true;
        return false;
    }

    isAtCorrectDestination() {
        const d = this.dest;
        const reached =
            (this.direction === 'up' && this.y <= 8) ||
            (this.direction === 'down' && this.y >= 85) ||
            (this.direction === 'left' && this.x <= 4) ||
            (this.direction === 'right' && this.x >= 88);

        if (!reached) return false;
        if (this.direction === 'up' || this.direction === 'down')
            return d.side === (this.direction === 'up' ? 'top' : 'bottom')
                && Math.abs(this.x - d.x) < 5;
        if (this.direction === 'left' || this.direction === 'right')
            return d.side === (this.direction === 'left' ? 'left' : 'right')
                && Math.abs(this.y - d.y) < 5;
        return false;
    }

    destroy() {
        this.active = false;
        this.el.remove();
    }

    render() {
        this.el.style.left = `${this.x}%`;
        this.el.style.top = `${this.y}%`;
    }
}

class Game {
    constructor(level) {
        this.container  = document.getElementById('gameContainer');
        this.scoreEl    = document.getElementById('scoreDisplay');
        this.timerEl    = document.getElementById('timerDisplay');
        // en plus pour le menue pause
        this.pauseBtn   = document.getElementById('pauseBtn'); 
        this.pauseMenu  = document.getElementById('pauseMenu');
        this.resumeBtn  = document.getElementById('resumeBtn');
        this.pauseTitle = document.getElementById('pauseTitle');
        //////
        this.level      = level;
        this.score      = ZERO;
        this.total      = ZERO;
        this.timeLeft   = TIME;
        this.running    = false;
        this.paused     = false;
        this.animId     = null;
        this.timerId    = null;
        this.spawnTimer = null;
        this.speedMult  = 1;
        this.trains     = [];

        // Reset complet de l'ancienne carte
        resetMap();

        const carteSet = LEVELS[this.level];
        this.carte = carteSet[Math.floor(Math.random() * carteSet.length)];

        this.carte.rail.forEach(def  => new Rail(def));
        this.carte.house.forEach(def => new House(def));
        this.switches = this.carte.switch.map(def => new Switch(def)).filter(sw => sw.el);

        const blackEl = document.getElementById('black');
        if (blackEl) {
            blackEl.style.cssText = `
            background: black;
            left: ${this.carte.house_x}%;
            top: ${this.carte.house_y}%;
            border: 3px solid rgba(255,255,255,0.3);
            color: rgba(0,0,0,0.7);
            position: absolute;
            width: 8%;
            aspect-ratio: 1;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5vmin;
        `;
            blackEl.innerHTML = '<i class="fa-solid fa-house"></i>';
        }

////////// Reset UI
        this.scoreEl.textContent = 'CORECT: 0 / 0';
        this.timerEl.textContent = this.formatTime(this.timeLeft);
        this.timerEl.classList.remove('urgent');
        if (this.pauseBtn)  this.pauseBtn.textContent = '⏸';
        if (this.pauseMenu) this.pauseMenu.classList.remove('visible');
        if (this.resumeBtn) this.resumeBtn.style.display = 'block';
        if (this.pauseTitle) this.pauseTitle.textContent = 'PAUSE';

        this.container.querySelectorAll('.overlay').forEach(el => el.remove());

        this._pauseHandler  = () => this.togglePause();
        this._resumeHandler = () => this.togglePause();
        if (this.pauseBtn)  this.pauseBtn.addEventListener('click', this._pauseHandler);
        if (this.resumeBtn) this.resumeBtn.addEventListener('click', this._resumeHandler);
    }

    destroy() {
        this.running = false;
        clearInterval(this.timerId);
        clearInterval(this.spawnTimer);
        cancelAnimationFrame(this.animId);
        this.trains.forEach(t => t.destroy());
        this.trains = [];
        this.switches.forEach(sw => sw.removeListeners());
        if (this.pauseBtn)  this.pauseBtn.removeEventListener('click', this._pauseHandler);
        if (this.resumeBtn) this.resumeBtn.removeEventListener('click', this._resumeHandler);
        this.container.querySelectorAll('.overlay').forEach(el => el.remove());

        // Remettre en mode sélection
        if (this.pauseMenu)  this.pauseMenu.classList.add('visible');
        if (this.resumeBtn)  this.resumeBtn.style.display = 'none';
        if (this.pauseTitle) this.pauseTitle.textContent = 'TRAIN GAME';
    }
/////////////////////////////////////
    togglePause() {
        if (!this.running) return;
        this.paused = !this.paused;
        if (this.pauseBtn)  this.pauseBtn.textContent = this.paused ? '▶' : '⏸';
        if (this.pauseMenu) this.pauseMenu.classList.toggle('visible', this.paused);
        if (!this.paused)   this.loop();
    }

    start() {
        this.running = true;
        this._spawnTrain();
        this._scheduleSpawn();
        this.startTimer();
        this.loop();
    }

    _spawnTrain() {
        if (!this.running) return;
        const t = new Train(this.container, this.carte);
        t.speed = 0.12 * this.speedMult;
        this.trains.push(t);
    }

    _scheduleSpawn() {
        this.spawnTimer = setInterval(() => {
            if (this.running && !this.paused) this._spawnTrain();
        }, 3000);
    }

    startTimer() {
        this.timerId = setInterval(() => {
            if (!this.running || this.paused) return;
            this.timeLeft--;
            this.timerEl.textContent = this.formatTime(this.timeLeft);
            this.timerEl.classList.toggle('urgent', this.timeLeft <= 30);
            if (this.timeLeft <= 0) {
                clearInterval(this.timerId);
                this.showEndScreen();
            }
        }, 1000);
    }

    formatTime(s) {
        const m   = Math.floor(s / 60);
        const sec = s % 60;
        return `⏱ ${m}:${sec.toString().padStart(2, '0')}`;
    }

    spawnParticles(x, y, color) {
        for (let i = 0; i < 8; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = (Math.random() * 1 + 0.5) + 'vmin';
            p.style.cssText = `
                width:${size}; height:${size};
                background:${color};
                left:${x + (Math.random() - 0.5) * 5}%;
                top:${y  + (Math.random() - 0.5) * 5}%;
                animation-delay:${Math.random() * 0.3}s;
            `;
            this.container.appendChild(p);
            setTimeout(() => p.remove(), 1000);
        }
    }

    onWin(train) {
        if (train.isAtCorrectDestination()) this.score++;
        this.total++;
        this.speedMult = Math.min(1 + this.score * 0.05, 3);
        this.scoreEl.textContent = `CORECT: ${this.score} / ${this.total}`;
        this.spawnParticles(train.x, train.y, train.dest.id);
        this._removeTrain(train);
    }

    _removeTrain(train) {
        train.destroy();
        this.trains = this.trains.filter(t => t !== train);
    }

    showEndScreen() {
        this.running = false;
        clearInterval(this.timerId);
        clearInterval(this.spawnTimer);
        cancelAnimationFrame(this.animId);
        this.trains.forEach(t => t.destroy());
        this.trains = [];

        const overlay = document.createElement('div');
        overlay.className = 'overlay win';
        overlay.innerHTML = `
            <h2>⏰ TEMPS ÉCOULÉ !</h2>
            <p>Score final :</p>
            <p style="color:#f1c40f; font-size:3vmin;">${this.score} / ${this.total}</p>
            <button id="restartBtn">▶ REJOUER</button>
        `;
        this.container.appendChild(overlay);
        document.getElementById('restartBtn').addEventListener('click', () => {
            overlay.remove();
            this.restart();
        });
    }

    restart() {
        this.score      = ZERO;
        this.total      = ZERO;
        this.timeLeft   = TIME;
        this.running    = true;
        this.paused     = false;
        this.speedMult  = 1;

        this.scoreEl.textContent = 'CORECT: 0 / 0';
        this.timerEl.textContent = this.formatTime(this.timeLeft);
        this.timerEl.classList.remove('urgent');
        if (this.pauseBtn)  this.pauseBtn.textContent = '⏸';
        if (this.pauseMenu) this.pauseMenu.classList.remove('visible');

        this.switches.forEach(sw => sw.reset());
        this.trains.forEach(t => t.destroy());
        this.trains = [];

        this._spawnTrain();
        this._scheduleSpawn();
        this.startTimer();
        this.loop();
    }

    loop() {
        if (!this.running || this.paused) return;

        for (const train of [...this.trains]) {
            if (train.pendingDirection) {
                train.directionDelay--;
                if (train.directionDelay <= 0) {
                    train.direction        = train.pendingDirection;
                    train.pendingDirection = null;
                }
            }

            for (const sw of this.switches) {
                if (sw !== train._lastSw
                    && Math.abs(train.x - sw.xPercent) < 3
                    && Math.abs(train.y - sw.yPercent) < 3) {
                    train.pendingDirection = sw.state;
                    train.directionDelay   = train.directionDelayMax;
                    train._lastSw          = sw;
                    break;
                }
            }

            if (train._lastSw) {
                const lsw = train._lastSw;
                if (Math.abs(train.x - lsw.xPercent) > 5 || Math.abs(train.y - lsw.yPercent) > 5) {
                    train._lastSw          = null;
                    train.pendingDirection = null;
                }
            }

            train.move();

            if (train.hasReachedDestination()) {
                this.onWin(train);
                continue;
            }

            if (train.isOutOfBounds()) {
                this._removeTrain(train);
                continue;
            }

            train.render();
        }

        this.animId = requestAnimationFrame(() => this.loop());
    }
}

//const game = new Game(); pas besoin
//game.start(); pas besoin