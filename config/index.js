require("dotenv").config();

const config ={
    port: process.env.PORT,
    name: process.env.BUCKET_NAME
}

module.exports = config;