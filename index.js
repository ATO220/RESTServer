const express  =  require('express');
const app = express();

const { mongoose } = require('./database'); 
//Settings
app.set('port', process.env.PORT || 3007);


//Hello World
app.get('/', function (req, res) {
    res.send('Hello World!');
  });

//Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
  