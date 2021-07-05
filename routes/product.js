const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const loggedIn = require('../middleware')


router.get('/products', async(req,res)=>{
try{
  const x = await Product.find({});
  res.render('products/index',{x});
}
catch(e){
  console.log("somwthing went wrong")
  req.flash('error','Cannot find Page')
  res.redirect('/error')
}

})

router.get('/products/new',loggedIn,(req,res)=>{

  

  res.render('products/new')
})

router.post('/products',loggedIn, async(req,res)=>{
try{
  await Product.create(req.body.product); 
   req.flash('success','Product created successfully');
  res.redirect('/products')


}
catch(e){

  console.log(e.message)
  req.flash('error','Cannot Create Product')
  res.redirect('/error')

}
  })

// to show product
router.get('/products/:id',async (req,res)=>{
  try{
    const product = await Product.findById(req.params.id).populate('reviews');
       res.render('products/show',{product})


  }
  catch(e){
    console.log(e.message)
    req.flash('error','Cannot Create Product')
    res.redirect('/error')
}
  })
// to edit
router.get('/products/:id/edit',loggedIn, async(req,res)=>{
  const products = await Product.findById(req.params.id)
  res.render('products/edit', {products})


})

// to update
router.patch('/products/:id',loggedIn, async(req,res)=>{
  await Product.findByIdAndUpdate(req.params.id , req.body.product)
  req.flash('success','Product updated successfully');
  res.redirect(`/products/${req.params.id}`)

})

//to delete
router.delete('/products/:id',loggedIn, async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id)
  res.redirect('/products')


})

router.post('/products/:id/review',loggedIn, async (req,res)=>{
  const product = await Product.findById(req.params.id)  

  const review = new Review({
    user:req.user.username,   
    ...req.body
  })
  product.reviews.push(review);
   await review.save();
   await product.save();
 res.redirect(`/products/${req.params.id}`)

})

router.get('/error',(req,res)=>{

  res.status(500).render('products/error')
})

module.exports = router;