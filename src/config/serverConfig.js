const env = require("dotenv");

const dotenv = env.config();

module.exports = {
    PORT :process.env.PORT
}

//console.log(process)