function Firework(pos, vel, force, minExplode, maxExplode) {
    this.stage = 0;
    this.particles = [];
    this.force = force;
    this.timeToExplode = random(minExplode, maxExplode);
    this.particles[0] = new Particle(pos, vel, 4, color(255, 255, 255, 255));
    this.noise = null;
    this.timeToStop = 60;
}

Firework.prototype.update = function() {
    switch (this.stage) {
        case 0:
            this.particles[0].applyForce(this.force);
            this.particles[0].update();
            if (--this.timeToExplode <= 0) {
                this.stage = 1;
                pos = this.particles[0].pos;
                this.particles.length = 0;
                c = color(random(0, 255), random(0, 255), random(0, 255), 0);
                this.particles = randomGenerator(pos, c);
                env = new p5.Envelope();
                env.setADSR(0.001, 0.02, 0.5, 0.05);
                env.setRange(1.0, 0);
                this.noise = new p5.Noise('white');
                thirds = width / 3;
                whichThird = floor(pos.x / thirds) - 1;
                this.noise.pan(whichThird);
                this.noise.amp(env);
                this.noise.start();
                env.play();
            }
            break;
        
        case 1:
            this.particles.forEach(function (p) {
                p.applyForce(this.force);
                p.adjustBrightness(10);
                p.update();
            }, this);
            
            if (this.particles[0].isAtMaxBrightness()) {
                this.stage = 2;
            }
            break;

        case 2:
            this.particles.forEach(function (p) {
                p.applyForce(this.force);
                p.adjustBrightness(-5);
                p.update();
            }, this);

            if (this.particles[0].isAtMinBrightness()) {
                this.particles.length = 0;
                this.stage = -1;
            }
            break;

        default:
            break;
    }
}

Firework.prototype.show = function() {
    this.particles.forEach(function (p) {
        p.show();
    }, this);
}

Firework.prototype.isDone = function() {
    return this.stage === -1;
}