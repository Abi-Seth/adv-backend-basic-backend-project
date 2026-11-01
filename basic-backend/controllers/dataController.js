const person = require('../data/person.json');

const dataController = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(person));
};

module.exports = dataController;
