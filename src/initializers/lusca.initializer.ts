import Initializer from '../base/initializer';
import lusca from 'lusca';

class LuscaInitializer extends Initializer {
  protected initialize(bond: any, settings: { [key: string]: any }): void {
    bond.server.use(lusca.xframe(settings['xframe']));
    bond.server.use(lusca.xssProtection(settings['xssProtection']));
  }
}

export const luscaInitializer = new LuscaInitializer().export()
