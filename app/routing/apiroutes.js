

var path = require("path");


var friendData = require("../data/friends.js");




module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/survey", function (req, res) {
        return res.json(friendData);
    });


    app.post("/api/survey", function (req, res) {

        console.log(req.body);

        friendData.push(req.body);
        res.json(true);


    });


};



