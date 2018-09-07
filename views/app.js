var express = require('express');

var app = express();



var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://test:test@ds251727.mlab.com:51727/todo-listapp');


//create a schema - tis is like a blue print
var todoSchema = new mongoose.Schema({
  item: String
});
var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item: 'get milk'},{item: 'get marks'},{item: 'get veggies'}]
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app){
  app.get('/todo', function(req, res){
    //get data from mongo db nd pass it to view
Todo.find({}, function(err, data){
  if (err) throw err;
  res.render('todo', {todos: data});
});
    }
);
app.post('/todo',urlencodedParser , function(req, res)
{
  //get data from the view and add it on mongo db

var newTodo = Todo(req.body).save(function(err,data){
  if (err) throw err;
  res.json(data);
});
});

app.delete('/todo/:item', function(req, res){
  //delete item requested from mongo db
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
    if (err) throw err;
    res.json(data);
  });
});


};

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'))

//fire controllers



//listen to port
app.listen(5000);
console.log('you are listeing to port 3000');
