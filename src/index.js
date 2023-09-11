const express = require("express");
const {PORT} = require('./config/serverConfig')
const serverStartUp = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });
};

serverStartUp();
