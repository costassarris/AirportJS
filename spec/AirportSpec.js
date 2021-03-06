describe("Airport", function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });

  it("can dock a plane", function() {
    airport.dock(plane)
    expect(airport.planes).toEqual([plane]);
  });

  it("can land a plane", function() {
    airport.dock(plane)
    expect(plane.land).toHaveBeenCalled();
  });

  it("can undock a plane", function() {
    airport.dock(plane)
    airport.undock(plane)
    expect(airport.planes).toEqual([]);
  });

});