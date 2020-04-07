function Launcher(pos, minVelocityX, maxVelocityX, minVelocityY, maxVelocityY, maxInterval, sky, gravity, minExplode, maxExplode)
{
    this.pos = pos;
    this.minVelocityX = minVelocityX
    this.maxVelocityX = maxVelocityX;
    this.minVelocityY = minVelocityY;
    this.maxVelocityY = maxVelocityY;
    this.maxInterval = maxInterval;
    this.sky = sky;
    this.gravity = gravity;
    this.minExplode = minExplode;
    this.maxExplode = maxExplode;

    this.countdown = random(0, this.maxInterval);
}

Launcher.prototype.update = function() {
    if (--this.countdown <= 0) {
        this.sky.push(new Firework(createVector(this.pos.x, this.pos.y),
                                   createVector(random(this.minVelocityX,this.maxVelocityX), random(this.minVelocityY,this.maxVelocityY)),
                                   this.gravity,
                                   this.minExplode, this.maxExplode));
        this.countdown = random(0, this.maxInterval);
    }
}