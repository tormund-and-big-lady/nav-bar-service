const items = require('../data/items.json');
const search = require('../data/search.json');


const models = require('./models.js');
/*
  Department,
  Search
*/

const seed = () => {
  models.Department.create(items)
    .then(() => 'Seeded items to Department document. Please verify that items has been seeded.')
    .catch(() => 'Error seeding items to Department document.')

    models.Search.create(search)
    .then(() => 'Seeded search results to Search document. Please verify that search results has been seeded.')
    .catch(() => 'Error seeding search results to Search document.')
}

// invoke seed via npm script
seed();