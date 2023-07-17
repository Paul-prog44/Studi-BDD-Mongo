const {userGet, useCreate} = require("../controllers/user")

function userRoute(app) {
    //Create
    app.post("/userCreate", useCreate)
    //Read
    app.get("/user", userGet)
}

module.exports =  userRoute;