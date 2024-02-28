const userModel = require('../Models/model.js');

module.exports.signup = (req, res) => {
  console.log(req.body);

  const newUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save()
    .then(() => {
      res.send({ code: 200, message: "Signup successful" });
    }).catch((err) => {
      res.send({ code: 500, message: "Signup Error"});
    });
};
