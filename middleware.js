  //middleware functio to check if user is logged in or not
  const loggedIn = (req,res,next)=>{

  
    if(!req.isAuthenticated()){ 
      req.flash('error','please login first')
      return res.redirect('/login')
  
    }
    next();

  }
  module.exports = loggedIn;