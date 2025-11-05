const Car = require('./Car');

class Garage {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    if (!car || !car.id) throw new Error('Invalid car');
    if (this.cars.find(c => c.id === car.id)) {
      throw new Error(`Car with id ${car.id} already exists`);
    }
    // accept either plain object or Car instance
    const toAdd = car instanceof Car ? car : new Car(car);
    this.cars.push(toAdd);
    return toAdd;
  }

  removeById(id) {
    const idx = this.cars.findIndex(c => c.id === id);
    if (idx === -1) return null;
    const [removed] = this.cars.splice(idx, 1);
    return removed;
  }

  getById(id) {
    return this.cars.find(c => c.id === id) || null;
  }

  listCars() {
    return this.cars.map(c => c.toObject());
  }

  displayCars() {
    const list = this.listCars();
    if (list.length === 0) {
      console.log('Le garage est vide.');
      return;
    }
    if (console.table) {
      console.table(list);
      return;
    }
    console.log('Voitures dans le garage:');
    list.forEach(c => console.log(`- [${c.id}] ${c.make} ${c.model} (${c.year})`));
  }
}

module.exports = Garage;
