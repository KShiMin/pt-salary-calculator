const express = require('express');
const port = 8080

const app = express();

// set stylesheet
app.use(express.static(__dirname + '/public/stylesheets'));

// setting view engine to ejs
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('home');
});

app.post('/', function(req, res){
    res.render('home');
});

app.get('/salary-cal', function(req, res){
    res.render('salary-cal');
});

app.get('/add-new-job', function(req, res){
    res.render(('new-job'))
})

app.get('/history', function(req,res){
    res.render('history')
})

let server = app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
    console.log("Press Ctrl + C to stop server.");
});
// deteremines how long website will try to load before showing error
server.setTimeout(500000);
