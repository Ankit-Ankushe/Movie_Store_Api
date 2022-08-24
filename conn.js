const mongoose = require('mongoose')

async function connectDB(){
    try {
        const url = 'mongodb://localhost:27017/imdb'
        mongoose.connect(url)
        console.log('Connection successfull');
    } catch (error) {
        console.log('connections not done');
    }
}
module.exports = connectDB;