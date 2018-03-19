const passport = require('passport');

module.exports = app => {

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback',
passport.authenticate('google'),
(req, res) => {
  res.redirect('/');
  }
);

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


//res.send(req.user) determines whether or not a user has signed in
app.get('/api/current_user', (req, res)=> {
    res.send(req.user);
  });
};

//auth routes is a function that takes our routes and attaches them to the app
