/**
 * Created by Nabillionaire on 4/1/17.
 */
// Twilio Credentials

module.exports = function(to, msg){
    var accountSid = 'AC7c27edfa4ae262264b916048268384cf';
    var authToken = '7da1eeb44eccb5fc6b9339b39302a27a';

    //require the Twilio module and create a REST client
    var client = require('twilio')(accountSid, authToken);
    console.log("works");
    client.messages.create({
        to: to,
        from: "+15876007897",
        body: msg,
    }, function(err, message) {
        console.log();
    });
}