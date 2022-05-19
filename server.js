const fs = require('fs');
// path for joining static files eventually
const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create(); // add { helpers }


// initialize express server
const app = express();
// set PORT
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// eventually connect routes to server and turns on routes
app.use(routes);


// sync sequelize models to the db, initiate server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`  ==========================================
  Crowder database initialized on PORT ${PORT}
  ==========================================`)
  })
});