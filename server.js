const fs = require('fs');
// path for joining static files eventually
const path = require('path');
const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create(); // add { helpers }
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// initialize express server
const app = express();
// set PORT
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "super duper secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({db: sequelize})
};

// middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(session(sess));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));


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