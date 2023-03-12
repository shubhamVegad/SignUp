const express = require('express')
const bodyPareser = require('body-parser')
const request = require('request')

const app = express();
app.set('view engine', 'ejs');
app.use(bodyPareser.urlencoded({extended:true}))


app.get("/", function(req, res){
    res.sendFile(__dirname+"\\\signup.html")
})

app.post("/", function(req, res){
    var fname = req.body.fname
    var lname = req.body.lname
    var email = req.body.email

    // res.sendFile(__dirname+"\\success.html")
    // console.log(__dirname+"\\failure.html");

    res.render("fail", {fname : fname})

})

app.listen(3000, function(){
    console.log("server is running on port 3000..");
})