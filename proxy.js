'use strict';

/**
 * Created by Fabien on 26/07/2016.
 */

var express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 9000,
    app = express();

app
    .use(cors())
    .listen(port, function(){
        console.log('CORS-enabled web server listening on port ' + port);
    });