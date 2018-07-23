import Initializer from '../base/initializer';
import path from 'path';

class AssetsInitializer extends Initializer {
  protected initialize(bond: any, settings: { [key: string]: any }): void {
    const publicPath: string = path.join(__dirname, settings['path']);

    bond.server.use(bond.provider.static(publicPath, {
      maxAge: settings['maxAge']
    }));
  }
}

export const assetsInitializer = new AssetsInitializer().export()
