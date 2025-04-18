const express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser')
const port = 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
// make own middleware
// middleware 1
app.use(function(req,res,next){
    // req.body.name="Iron man"
    console.log("middleware 1 called ");
    next();
});
// middleware 1
app.use(function(req,res,next){
    console.log("middleware 2 called ");
    console.log(req.body.name)
    next();
});

// app.post('/contact-list',function(req,res){
//     const formData = req.body;
//     if(formData){
//         res.send({status:"200"})
//     }
//     else{
//         res.send({status:"404"})
//     }
//     console.log(req.body)
// })
// app.delete('/contact-list/:id', function (req, res) {
//     console.log(req.params);
//     const paramVal = req.params.id;
//     console.log('paramVal', paramVal);
//     if (paramVal) {
//       return res.status(200).send({ status: '200', message: 'Deleted successfully' });
//     } else {
//       return res.status(404).send({ status: '404', message: 'Not found' });
//     }
//   });

  
app.delete('/contact-list/', function(req,res){
    const id = req.query.id;
    console.log(req.query);
    console.log(id)
    if(id){
        res.send({status:"200",message:"Success"})
    }else{
        res.send({status:"404",message:"not success"})
    }
})
app.get('/', function(req,res){
    res.send('<h1>Hello World</h1>')
});
app.get('/profile', function(req,res){
    res.send('<h1>Profile Page</h1>')
})
app.listen(port, function(err){
    if(err){
        console.lof("Error!",err);
        return;
    }
    console.log("Server up and running on port",port)
})