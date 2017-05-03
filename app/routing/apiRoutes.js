module.exports = function(app) {
    app.get("/api/friends/", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/new", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
    });
}
