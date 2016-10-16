var db = require('db');
db.connect();
var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ", " + who.name);
};

module.exports = User;