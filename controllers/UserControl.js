const User = require("../modules/User");

/************************** Register & Login ************************ */

const Register = async (_username, _password) => {
    try {
        const dtat = await User.findOne({ username: _username });
        if (dtat) {
            console.log('exists');
            return;
        }

        let data = await User.create({ username: _username, password: _password });
        if (data) {
            console.log("Register is Done");
        } else {
            console.log("Error");
        }
    } catch (e) {
        console.error(e);
    }
}

const Login = async (_username, _password) => {
    try {
        const user = await User.findOne({ username: _username, password: _password });
        if (user) {
            console.log("Welcome to the website");
        } else {
            console.log("Invalid");
        }
    } catch (e) {
        console.error(e);
    }
}

/********************************************************************************************* */
// -----------------------------GET USERS------------------------------------------------

const getUsers = async () => {
    try {
            let data = await User.find({});
        if (data) {
            console.log('Users', data);
        } else {
            console.log("Error");
        }
    } catch (e) {
        console.error(e);
    }
}

/*************----Exports----************ */

module.exports = { Register, Login, getUsers };
