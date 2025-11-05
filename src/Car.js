class Car {
  constructor({ id, make, model, year }) {
    if (!id) throw new Error('Car must have an id');
    this.id = id;
    this.make = make || '';
    this.model = model || '';
    this.year = year || null;
  }

  toObject() {
    return {
      id: this.id,
      make: this.make,
      model: this.model,
      year: this.year,
    };
  }
}

module.exports = Car;
