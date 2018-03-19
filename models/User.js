const mongoose = require('mongoose');
const  { Schema } = mongoose;


//one user has many surveys
const userSchema = new Schema ({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
