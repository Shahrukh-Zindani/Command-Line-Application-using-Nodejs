
var https = require ("https");
var username= "chalkers";
function printMessage(username, badgeCount, points){
    var message = username+ "has "+badgeCount+ " total badges and " +points+ "points in Javascript";
    console.log(message);
}

function get(username){
var request= https.get("https://teamtreehouse.com/" + username + ".json", function(response){
    var body ="";
     console.log(response.statusCode);
    response.on('data',function(chunk){
        //console.log('Body: '+chunk);
        body+=chunk;
    });
    response.on('end',function(){
       //console.log(body);
        var profile= JSON.parse(body);
        printMessage(username,profile.badges.length,profile.points.JavaScript);
        
        console.log(typeof body);
    });
});
}
module.exports.get = get;