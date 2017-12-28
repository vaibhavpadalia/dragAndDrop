var mongoose = require('mongoose');
var User = mongoose.model('userData');


exports.createUser = (req, res) => {
    console.log('Inside create user');  // For testing purpose only
    var user = new User({
        email: req.body.email,
        name: req.body.name,
        created_at: new Date(),
        updated_at: ""
    });
    user.save((error, response) => {
        if (error) {
            res.json({
                success: false,
                body: error
            });
        }
        else {
            res.json({
                success: true,
            });
        }
    });
}


exports.getDetails = (req, res) => {
    User.find({},(error, response) =>{
        if(error) {
            res.json(error);
        }
        else {
            res.json({
                success: true,
                response:response
            });
        }
    });
}