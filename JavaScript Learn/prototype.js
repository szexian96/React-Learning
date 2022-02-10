function Particle(x,y){
    this.x = 100;
    this.y = 99;

    return x,y;
    // this.show = function() { //show function is nneeded to create?
    //     point(this.x,this.y);
    // }
}

Particle.prototype.show = function(){
    point(this.x,this.y);
}

var p = new Particle(); //making a new object
var v = new Particle(500,300);

console.log(p)
console.log(v)
