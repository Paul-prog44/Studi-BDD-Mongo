async function userGet(req, res) {
    res.json("My user");
}

async function useCreate(req, res) {
const User = req.app.get("models").User;
const NewUser = await new User({
    firstName : "Jean", 
    lastName : "Durant", 
    dateOfBirth : new Date()
}).save();

res.json(NewUser);
}

module.exports = { userGet, useCreate }