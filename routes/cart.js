const express = require('express')
const router = express.Router();
const Product = require('../models/product')
const loggedIn = require('../middleware');
const User = require('../models/user');


router.get('/user/:userId/cart' ,loggedIn, async (req,res)=>{
 try{
  const user= await User.findById(req.params.userId).populate('cart')
 
  res.render('cart/showCart', {cart:user.cart})  
 }
 catch{
   req.flash('error','Unable to add this product')
   res.render('error')
 }
})



router.post('/user/:id/cart',loggedIn,async(req,res)=>{
try{
  const product = await Product.findById(req.params.id) 
  const user = req.user; 
  user.cart.push(product);
  req.flash('success','Added to cart successfully')
  await user.save();
  res.redirect(`/user/${user._id}/cart`)

}
catch{   req.flash('error','Unable to add this product')
res.render('error')

}
})

router.delete('/user/:userId/cart/:id',loggedIn,async (req,res)=>{

  const {userId,id} = req.params;
  await User.findByIdAndUpdate(userId,{$pull:{cart:id}}) 

  res.redirect(`/user/${req.user._id}/cart`)
})











module.exports=router;