var mongoose = require('mongoose');

module.exports = function (app) {

    // create schemas
    var userSchema = mongoose.Schema({
        uid: Number,
        name: String,
        password: String,
        email: String,
        paymentIds: Array
    });

    var paymentSchema = mongoose.Schema({
        pid: Number,
        name: String,
        category: String,
        price: Number,
        description: String,
        phone: String
    });

    // create models
    var User = mongoose.model('User', userSchema);
    var Payment = mongoose.model('Payment', paymentSchema);

    app.get('/api/hello', function (req, res) {
        res.json("Hello Nable");
    });

    app.post('/api/user', function(req, res) { // tested, checks for duplicate entry
        console.log("POST METHOD WORKS");

        User.findOne({ email: req.body.email }, function(err, user){
            if(err)
                return console.log(err);

            if(user == undefined){
                var usr = new User({
                    uid: req.body.uid,
                    name: req.body.name,
                    password: req.body.password,
                    email: req.body.email
                });
                usr.save(function(err, usr){
                    if(err)
                        return console.log(err);
                    res.json(usr);
                });
            }else{
                res.json("Duplicate entry");
            }

        });

    });

    app.get('/api/user', function(req, res) { // tested
        console.log("GET METHOD WORKS");
        User.findOne({ email: req.query.email }, function(err, user){
            if(err)
                return console.log(err);
            console.log(user.name + " " + user.email);
            res.send(user);
        });
    });

    app.put('/api/user', function(req, res) { // tested
        console.log("PUT METHOD WORKS");
        User.findOne({ email: req.body.email }, function(err, user){
            if(err)
                return console.log(err);

            user.name = req.body.name == undefined ? user.name : req.body.name;
            user.password = req.body.password == undefined ? user.password : req.body.password;
            user.email = req.body.email == undefined ? user.email : req.body.newEmail;
            user.save(function(err, usr){
                if(err)
                    return console.log(err);
                res.send(user);
            });
        });
    });

    app.delete('/api/user', function(req, res) { // tested
        User.remove({ email: req.body.email }, function(err){
            if (!err)
                console.log(err);
            res.send("success");
        });
    });


    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });



User.find(function (err, users) {
    if (err) return console.error(err);
    console.log(users);
});

// User.remove({}, function(err) {
//     if (err) {
//         console.log(err)
//     }
// });

};
