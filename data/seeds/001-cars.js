
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '12345', make: 'dodge', model: 'avenger', mileage: 10000},
        {id: 2, VIN: '678910', make: 'chevy', model: 'corsica', mileage: 56789},
      ]);
    });
};
