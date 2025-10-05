const userModel = require('../db/userModel');
const { error, success } = require('../utils/handler');

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send(error(400, "Email and password Required!!"));
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.send(error(401, "User Not Found!! Please Sign Up"));
        }

        if (user.password !== password) {
            return res.send(error(401, "Incorrect Password!!"));
        }

        return res.send(success(201, user));

    } catch (err) {
        return res.send(error(500, err.message));
    }
};

const signupContorller = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.send(error(400, "Enter Every Field!!!"));
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.send(error(409, "User with this email already exists"));
        }

        const newUser = await userModel.create({ username, email, password });
        return res.send(success(201, "User is created"));

    } catch (err) {
        return res.send(error(500, err.message));
    }
};
;

const logoutController = async (req, res) => {
    // optional: clear JWT or session if implemented later
};

module.exports = {
    loginController,
    logoutController,
    signupContorller
};
