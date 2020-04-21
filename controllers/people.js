const People = require('../models/people');

exports.getPeople = (req, res, next) => {
    People.fetchAll(people => {
      res.render('hello/people', {
        ppl: people,
        pageTitle: 'All People',
        path: '/people'
      });
    });
  };

exports.postAddPeople = (req, res, next) => {
    const name = req.body.name;
    const people = new People(null, name);
    people.save();
    res.redirect('/people');
  };

