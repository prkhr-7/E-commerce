const express = require('express');
const User = require('../models/user');
const router = express.Router();
const passport = require('passport')




router.get('/register', async(req,res)=>{

  res.render('auth/signup')
})
router.post('/register', async (req,res)=>{
try{
  
  const user = new User({username:req.body.username, email : req.body.email})
  const newuser =  await User.register(user,req.body.password)  // is method me password alag se pass krna hotab hai
  
  console.log(newuser)
  req.flash('success','User Registered successfully , kindly login')
  res.redirect('/products')
}
catch(e) {
  req.flash('error',e.message)
  res.redirect('/register')
}
})

//to get the login form

router.get('/login',(req,res)=>{

  res.render('auth/login')
})

router.post('/login', passport.authenticate('local', { 
                                   failureRedirect: '/login',
                                   failureFlash: true 
                                  }), (req,res)=>{
                                    req.flash('success','Logged in successfully')
                                    res.redirect('/products')
                                   }
);

router.get('/logout',(req,res)=>{

  req.logout();
  req.flash('success','Logged out successfully')
  res.redirect('/products')
})


module.exports = router;