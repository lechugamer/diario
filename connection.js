const mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb+srv://lechugamer1995:1234567890@rest.kgvh2.mongodb.net/diario', {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
