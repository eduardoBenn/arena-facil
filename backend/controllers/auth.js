const bcrypt = require("bcrypt");
const User = require("../db/models/user");
const jwt = require("jsonwebtoken");

const permission = async (request, response) => {
  console.log("caiu");
  try {
    const token = await request.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
    const user = await decodedToken;
    request.user = user;

    if (user) {
      response.status(200).json(user);
    }
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

const register = (request, response) => {
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        name: request.body.name,
        lastname: request.body.lastname,
        cpf: request.body.cpf,
        email: request.body.email,
        admin: request.body.admin || false,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};

const login = (request, response) => {
  User.findOne({ email: request.body.email })
    .then((user) => {
      bcrypt
        .compare(request.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
              userAdmin: user.admin,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
};

module.exports = {
  register,
  login,
  permission,
};
