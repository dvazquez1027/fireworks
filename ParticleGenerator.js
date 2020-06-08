function randomGenerator(pos, c) {
    let generators = [randomPattern, randomPatternRandomColor, randomCircularPattern, circlePattern, rosePattern, heartPattern];
    let a = floor(random(0, 100)) % generators.length;
    return generators[a](pos, c);
}

function randomPattern(pos, c) {
    let ret = [];
    for (var p = 0;  p < 100;  ++p) {
        cc = color(red(c), green(c), blue(c), alpha(c));
        ret.push(new Particle(pos.copy(), createVector(random(-1,1), random(-1,1)), 2, cc));
    }
    return ret;
}

function randomPatternRandomColor(pos) {
    let ret = [];
    for (var p = 0;  p < 100;  ++p) {
        c = color(random(0, 255), random(0, 255), random(0, 255), 0);
        cc = color(red(c), green(c), blue(c), alpha(c));
        ret.push(new Particle(pos.copy(), createVector(random(-1,1), random(-1,1)), 2, cc));
    }
    return ret;
}

function randomCircularPattern(pos, c) {
    let ret = [];
    let inc = TWO_PI / 180;
    let angle = 0;
    for (var p = 0;  p < 180;  ++p) {
        cc = color(red(c), green(c), blue(c), alpha(c));
        x = cos(angle);
        y = sin(angle);
        ret.push(new Particle(pos.copy(), createVector(random(-x,x), random(-y,y)), 2, cc));
        angle += inc;
    }
    return ret;
}

function circlePattern(pos, c) {
    let ret = [];
    let increments = 360;
    let increment = TWO_PI / increments;
    let angle = 0;
    for (var p = 0;  p < increments;  ++p) {
        cc = color(red(c), green(c), blue(c), alpha(c));
        x = cos(angle);
        y = sin(angle);
        ret.push(new Particle(pos.copy(), createVector(x, y), 2, cc));
        angle += increment;
    }
    return ret;
}

function rosePattern(pos, c) {
    let ret = [];
    let increments = 360;
    let increment = TWO_PI / increments;
    let angle = 0;
    let petals = floor(random(2, 20));
    for (var p = 0;  p < increments;  ++p) {
        cc = color(red(c), green(c), blue(c), alpha(c));
        r = cos(petals*angle);
        x = r * cos(angle);
        y = r * sin(angle);
        ret.push(new Particle(pos.copy(), createVector(x, y), 2, cc));
        angle += increment;
    }
    return ret;
}

function heartPattern(pos, c) {
    let ret = [];
    let increments = 360;
    let increment = TWO_PI / increments;
    let angle = 0;
    for (var p = 0;  p < increments;  ++p) {
        cc = color(red(c), green(c), blue(c), alpha(c));
        r = 1 + sin(angle);
        x = r * cos(angle);
        y = r * sin(angle);
        ret.push(new Particle(pos.copy(), createVector(x, y), 2, cc));
        angle += increment;
    }
    return ret;
}