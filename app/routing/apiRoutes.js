module.exports = function(app, friends) {
    app.get("/api/friends/", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/new", function(req, res) {

        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
        var newFriendScores = newFriend.scores;
        var arrayLocation = (friends.length - 1);


        if (friends.length === 1) {
            console.log('You are the first applicant!');
        } else {
            for (var i = 0; i < friends.length; i++) {
                if (i !== arrayLocation) {
                    var oldFriendScores = friends[i].scores;
                    var differenceArray = newFriendScores.map(function(num, i) {
                        return Math.abs(num - oldFriendScores[i]);
                    })

                    console.log('Sum: ' + newFriend.name + ' & ' + friends[i].name + ' array ' + differenceArray);

                    var sum = differenceArray.reduce(function(a, b) {
                        return a + b;
                    }, 0);
                    console.log('Sum: ' + sum);
                }
            }
        }

    });
}
