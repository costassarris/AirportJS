var Airport = function() {
  this.planes = [];
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
  plane.land();
};

Airport.prototype.undock = function(plane) {
  index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};