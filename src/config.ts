export default {
  assets: {
    enabled: true,
    path: 'public',
    maxAge: 31557600000
  },

  bodyParser: {
    enabled: true,
    extended: true
  },

  compression: {
    enabled: true
  },

  flashes: {
    enabled: false
  },

  lusca: {
    enabled: true,
    xframe: 'SAMEORIGIN',
    xssProtection: true
  },

  session: {
    enabled: true,
    resave: true,
    saveUninitialized: true
  },

  winston: {
    enable: true,
    level: 'debug',
    logfile: 'debug.log'
  }
};
