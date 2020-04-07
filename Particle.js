function Particle(pos, vel, weight, color) {
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0,0);
    this.weight = weight;
    this.color = color;
}

Particle.prototype.applyForce = function (force) {
    this.acc.add(force);
};

Particle.prototype.adjustBrightness = function (b) {
    this.color.setAlpha(alpha(this.color) + b);
};

Particle.prototype.isAtMaxBrightness = function () {
    return alpha(this.color) >= 255;
};

Particle.prototype.isAtMinBrightness = function () {
    return alpha(this.color) <= 0;
};

Particle.prototype.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
};

Particle.prototype.show = function () {
    strokeWeight(this.weight);
    stroke(this.color);
    point(this.pos.x, this.pos.y);
};
