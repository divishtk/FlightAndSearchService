const express = require('express');
const router = express.Router();

const v1ApiROute = require('./v1/index');

router.use('/v1',v1ApiROute);

module.exports =  router
