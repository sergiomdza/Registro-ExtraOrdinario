const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
require('./database');
app.listen(app.get('port'));
console.log('Server is in port', app.get('port'));
