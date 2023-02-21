const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => { // passport requires done to be called
        User.find({ googleId: profile.id })
          .then((user) => {
            if (user) {
              done(null, user);  
            } else {
              new User({ googleId: profile.id })
                .save()
                .then((newUser) => {
                  done(null, newUser);
                });
            }
          });
        
      }
    )
  );
  

  