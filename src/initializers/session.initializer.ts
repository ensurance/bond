import session from 'express-session';

export function sessionInitializer(bond: any, settings: { [key: string]: any }): void {
  bond.server.use(session({
    resave: settings['resave'],
    saveUninitialized: settings['saveUninitialized'],
    secret: bond.env.BOND_SESSION_SECRET,
  }));
}
