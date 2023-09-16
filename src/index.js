const express = require("express");
const bodyParser = require('body-parser')

const cityRepository = require('./repository/city-repository')

const {PORT} = require('./config/serverConfig')
const apiRoutes = require('./routes/index')

const serverStartUp = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))
  app.use('/api',apiRoutes);
  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);


    //const repo = new cityRepository();
    //repo.createCity({name:"Mumbai"});
    
  });
};

serverStartUp();
