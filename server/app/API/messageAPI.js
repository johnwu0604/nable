/**
 * Created by Nabillionaire on 4/1/17.
 */
// Twilio Credentials

module.exports = function(to, msg){
    var accountSid = 'AC4cc12537e685d9d199ea0d4f06aa3aec';
    var authToken = '89ff65673b2b8b92df329c36356c4ee0';

    //require the Twilio module and create a REST client
    var client = require('twilio')(accountSid, authToken);
    console.log("works");
    client.messages.create({
        to: to,
        from: "+12264555639",
        body: msg,
    }, function(err, message) {
        //console.log(message.sid);
    });
}