import Initializer from '../base/initializer';
import session from 'express-session';

class SessionInitializer extends Initializer {
  protected initialize(bond: any, settings: { [key: string]: any }): void {
    bond.server.use(session({
      resave: settings['resave'],
      saveUninitialized: settings['saveUninitialized'],
      secret: bond.env.BOND_SESSION_SECRET,
    }));
  }
}

export const sessionInitializer = new SessionInitializer().export()
