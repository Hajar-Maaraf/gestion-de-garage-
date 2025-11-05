const Garage = require('./src/Garage');
const Car = require('./src/Car');
const carsData = require('./data/cars-data');

const garage = new Garage();

console.log('=== Démonstration du Garage de Voitures ===\n');

// 1. Charger toutes les voitures depuis cars-data.js
console.log('1. Chargement initial des voitures :');
carsData.forEach(car => {
    garage.addCar(car);
});
garage.displayCars();

// 2. Ajouter de nouvelles voitures
console.log('\n2. Ajout de nouvelles voitures :');
const nouvelles = [
    { id: 'N1', make: 'BMW', model: 'X5', year: 2023 },
    { id: 'N2', make: 'Audi', model: 'A4', year: 2024 }
];
nouvelles.forEach(car => {
    garage.addCar(car);
    console.log(`Ajoutée: ${car.id} - ${car.make} ${car.model}`);
});
console.log('\nAprès ajouts :');
garage.displayCars();

// 3. Supprimer des voitures
console.log('\n3. Suppression de voitures :');
['B2', 'N1'].forEach(id => {
    const removed = garage.removeById(id);
    console.log(`Suppression ${id}: ${removed ? 'OK - ' + removed.make + ' ' + removed.model : 'introuvable'}`);
});

// 4. État final
console.log('\n4. État final du garage :');
garage.displayCars();

// Exporter pour tests si besoin
module.exports = { garage, Garage, Car };
