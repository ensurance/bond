import Initializer from '../base/initializer';
import flash from 'express-flash';

class FlashesInitializer extends Initializer {
  protected initialize(bond: any, settings: { [key: string]: any }): void {
  bond.server.use(flash());
  }
}

export const flashesInitializer = new FlashesInitializer().export()
