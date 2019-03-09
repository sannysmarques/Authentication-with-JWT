// express
const express = require('express');
var app = express();

// connection
if(!module.parent){
    app.listen(6969, function() {
      console.log('listening on port 6969!');
    });
}

/*// mongo ODM
const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.URL_BD + '/cbvd-backend');
mongoose.Promise = global.Promise;
*/

/*// CORS
const cors = require('cors');
*/

// routers
const router1 = express.Router();
const router2 = express.Router();

/**/
const authRouter = require('./modules/authentication/auth.server.routes');
app.use('/auth', authRouter(router1));
const userRouter = require('./modules/user/user.server.routes');
app.use('/user', userRouter(router2));
