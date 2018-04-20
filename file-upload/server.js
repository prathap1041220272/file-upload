'use strict'
const express = require('express');
var assert = require('assert');
var multer = require('multer');

const app = express();
const port = process.env.PORT||3000;
const mongoose = require('./models');

require('./routes')(app);

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
})