
const express = require('express'), body_parser = require('body-parser'), path = require('path'), app = express();

app.use(body_parser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "./client/views/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 8001);

require('./server/config/routes.js')(app);