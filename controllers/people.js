const People = require('../models/people');
const data = require('../data/data');
const { Pool, Client } = require('pg');

exports.getPeople = (req, res, next) => {
  People.fetchAll()
    .then(result => {
      return res.render('hello/people', {
        ppl: result.rows,
        path: '/people'
      })
    })
    .catch(error => { return error });
};

exports.postAddPeople = (req, res, next) => {
  const name = req.body.name;
  const people = new People(null, name);
  people.save();
  res.redirect('/people');
};


exports.deletePeople = (req, res, next) => {
  const id = req.body.name;
  console.log(id);
  People.findById(id)
    .then(value => {
      const id = value.rows[0]
      console.log(id.id,typeof(id.id));
      const carrier = id.id;
      return People.deletePerson(carrier);
    })
    .catch(error => {return error});
  res.redirect('/people');
}

