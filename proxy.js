/**
 * Created by Fabien on 26/07/2016.
 */
var express = require('express'),
    cors = require('cors'),
    app = express();

app
    .use(cors())
    .listen(9000, function(){
        console.log('CORS-enabled web server listening on port 9000');
    });