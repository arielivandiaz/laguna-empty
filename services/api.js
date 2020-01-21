var url = '';

let checkService = (item) => {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearInterval(wait);
      resolve(item);
    }, Math.floor(Math.random() * 2500))
  })
};
let isLoggedIn = (req, res, next) => {

  if (req.isAuthenticated())
    return next();
  else {
    console.log("redirect");

    res.redirect(url + '/login');
  }
}



module.exports = {
  checkService,
  isLoggedIn
}
