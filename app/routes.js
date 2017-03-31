
module.exports = function (app) {

    // Jobs api ----------------------------------------------------------------

    // get all jobs
    app.get('/api/hello', function (req, res) {
        res.json("Hello Nable");
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });



};
