'use strict'
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/fileupload')
.then(()=>{
	console.log('connected to the db')
})
.catch((err)=>{
	console.log(err.message)
})