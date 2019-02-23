const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const configRoutes = require('./routes');
const st = express.static(__dirname + '/public');

const app = express();

app.use('/public', st);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log('Server is up and running on port 3000')
});




