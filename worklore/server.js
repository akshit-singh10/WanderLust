const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({secret : "mysupersecretstring", resave :false,saveUninitialized : true}));
app.use(flash());



app.get("/register",(req,res)=>
{
  let {name = "anonymous"} = req.query;
  req.session.name = name;
 
  if(name ==="anonymous" || name==="")
  {
     req.flash("error","name not registered!");
  }
  else
  {
     req.flash("success","Name is registere!"); 
    }
  res.redirect('/hello');
});

app.get("/hello",(req,res)=>
{
  res.locals.successmsg = req.flash("success");
  res.locals.errormsg = req.flash("error");
  res.render("page.ejs",{name : req.session.name});
});



// app.get("/test",(req,res)=>
// {
//   res.send("test successful");
// });

// app.get("/reqcount",(req,res)=>
// {
//   if(req.session.count)
//   {
//     req.session.count++;
//   }
//   else
//   {
//     req.session.count =1;
//   }

//   res.send(`Request received ${req.session.count} times` );
// });



app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
}); 
