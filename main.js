const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('Express Is Listening on Port 3000')
});

app.get('/', function(req, res)  {
    //res.send('The Home Page Is Working') 
    res.render('index.ejs', {helloMessage: 'Welcome to my node app with EJS'});
});


app.set('view engine', 'ejs');



