const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");


// method: POST
// url: /api/auth/login
// access: Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).send("email dose not exist");
    }

    if (password != user.password) {
      return res.status(401).send("Password incorrect");
    }

    const token = await generateToken(user._id);
    if (token) {
      res
        .cookie("access_token", token, {
          httpOnly: true,
          // secure: true
        })
        .status(201)
        .json({ token });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};




//Genrete JWT
const generateToken = async (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_KEY, {
    expiresIn: "1d",
  });
};

exports.logout = (req, res) => {
  console.log("yes");
  res.clearCookie("access_token");
  res.status(200).json("Logout success");
};
