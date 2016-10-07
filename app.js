var express = require('express');
var i18n = require('i18n');
var url = require('url');

var app = express();

i18n.configure({
  locales: ['en', 'zh'],
  directory: __dirname + '/locales'
});

app.use(i18n.init);
app.use(setLocale);

app.get('/', function(req, res){
   res.send('<body>' + req.__('Hello') + '</body>'); 
});

function setLocale(req, res, next) {
  var locale;
  if (req.acceptsLanguages()) {
    locale = req.acceptsLanguages()[1];
  } else {
    locale = "zh";
  }

  req.setLocale(locale);
  next();
};

app.listen(3000);
