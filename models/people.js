const fs = require('fs');
const path = require('path');


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'people.json'
);

const getPeopleFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        };
    });
};

module.exports = class People {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    save() {
        getPeopleFromFile(people => {
            this.id = Math.random().toString();
            people.push(this);
            fs.writeFile(p, JSON.stringify(people), err => {
                console.log(err);
            });
        }
        )
    };
    static fetchAll(cb) {
        getPeopleFromFile(cb);
    };
}


