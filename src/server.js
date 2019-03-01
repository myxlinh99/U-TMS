var express = require('express'); // must have express module
var app = express();
app.use(express.static('.')); // root directory of server is localhost:xxxx/

