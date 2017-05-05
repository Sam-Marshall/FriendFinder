module.exports = function(app, friends) {
    app.get("/api/friends/", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/new", function(req, res) {

        var newFriend = req.body;
        friends.push(newFriend);
        var newFriendScores = newFriend.scores;
        var arrayLocation = (friends.length - 1);
        var arrayOfSums = [];
        var message = '';

        if (friends.length === 1) {
            message = 'You are the first applicant!';
            res.json('You are the first applicant!');
        } else {
            for (var i = 0; i < friends.length; i++) {

                if (i !== arrayLocation) {
                    var oldFriendScores = friends[i].scores;
                    var differenceArray = newFriendScores.map(function(num, i) {
                        return Math.abs(num - oldFriendScores[i]);
                    })

                    console.log(newFriend.name + ' & ' + friends[i].name + ' array ' + differenceArray);

                    var sum = differenceArray.reduce(function(a, b) {
                        return a + b;
                    }, 0);

                    arrayOfSums.push(sum);

                    console.log('Sum: ' + sum);

                } else {
                    arrayOfSums.push(1000);
                }

            }
            console.log(arrayOfSums);

            var indexOfSmallest = (arrayOfSums.length) - 1;
            console.log(indexOfSmallest);

            for (var i = 0; i < arrayOfSums.length; i++) {

                if (arrayOfSums[i] < arrayOfSums[indexOfSmallest]) {
                    indexOfSmallest = i;
                }

            }
            message = friends[indexOfSmallest].name + ' is your new best friend';
            res.json(friends[indexOfSmallest]);
        }


    });
}
