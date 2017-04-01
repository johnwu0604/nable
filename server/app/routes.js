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

    // USER APIs
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
            res.send(user);
        });
    });

    app.put('/api/user', function(req, res) { // tested
        console.log("PUT METHOD WORKS");
        User.findOne({ email: req.body.email }, function(err, user){
            if(err)
                return console.log(err);

            user.name = req.body.newName == undefined ? user.name : req.body.newName;
            user.password = req.body.newPassword == undefined ? user.password : req.body.newPassword;
            user.email = req.body.newEmail == undefined ? user.email : req.body.newEmail;

            if(req.body.newEmail == undefined){
                user.save(function(err, user){
                    if(err)
                        return console.log(err);
                    res.send(user);
                });
            }else {
                User.findOne({ email: user.email }, function(err, usr){
                    if(err)
                        return console.log(err);

                    if(usr == undefined){
                        user.save(function(err, user){
                            if(err)
                                return console.log(err);
                            res.send(user);
                        });
                    }else{
                        res.json("Duplicate entry");
                    }

                });
            }

        });
    });

    app.delete('/api/user', function(req, res) { // tested
        User.remove({ email: req.body.email }, function(err){
            if (!err)
                console.log(err);
            res.send("success");
        });
    });



    // PAYMENT APIs

    app.post('/api/payment', function(req, res){
        var pmt = new Payment({
            pid: req.body.pid,
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.price,
            phone: req.body.phone
        });
        pi
        User.findOne({ email: req.body.email }, function(err, usr){
            if(err)
                return console.log(err);

            var newArray = usr.paymentIds.slice();
            newArray.push(pmt);
            var query = {email: req.body.email};
            User.update(query, {paymentIds: newArray}, undefined, function(err){
                if(err)
                    console.log(err);
                res.send("payment added");
            });
        });


    });

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });



User.find(function (err, users) {
    if (err) return console.error(err);
    for(u in users){
        console.log(users[u].paymentIds);
    }
});

// User.remove({}, function(err) {
//     if (err) {
//         console.log(err)
//     }
// });

};
