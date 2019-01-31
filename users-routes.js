var express = require('express');
var router = express.Router();

var users = [
    {
        username: "John Doe",
        age: 25
    },
    {
        username: "Jane Doe",
        age: 25
    }
]

router.get('/users', function (req, res) {
    res.end(JSON.stringify(users));
});

module.exports = router;