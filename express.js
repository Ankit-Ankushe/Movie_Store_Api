const express = require('express');
const Movie = require('./schema');
const connectDB = require('./conn');
connectDB()


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())


// get request
 app.get('/getMovie' ,async (req,res) => {
    const data = await Movie.find()
    res.send(data)
})


// other get requests 
app.get('/Movie' ,async (req,res) => {
    const data = await Movie.find()
    res.send(data)
})
app.get('/MovieTop50' ,async (req,res) => {
    const data = await Movie.find().limit(50)
    res.send(data)
})
app.get('/MovieTop10' ,async (req,res) => {
    const data = await Movie.find().limit(10)
    res.send(data)
})
app.get('/Movie/:id' ,async (req,res) => {
    var Id = req.params.id
    const data = await Movie.find({_id:Id})
    res.send(data)
})



// Post request
app.post('/addMovie', async (req,res) => {
    const query = req.body;
    Movie.create(query)
    res.send('Movie Added')
})

// Update request
app.put('/updateMovie/:id',async (req,res) => {
    const Id = req.body.id
    const query = req.body;
    await Movie.findOneAndUpdate({_id: Id},{query})
    res.send('Movie Updated')
})

// delete request
app.delete('/deleteMovie/:id',async(req,res) => {
    const Id = req.params.id;
    await Movie.deleteOne({_id:Id})
    res.send('Movie deleted')
})

// Search Request
app.get('/searchMovie',async(req,res) => {
    const tofind = req.query.title
    console.log(tofind)
    const data = await Movie.find({title:{$regex:tofind}})
    res.send(data)
})


app.listen(PORT , () => {
    console.log('server started');
})
