import Initializer from '../base/initializer';
import compression from 'compression';

class CompressionInitializer extends Initializer {
  protected initialize(bond: any, settings: { [key: string]: any }): void {
    bond.server.use(compression());
  }
}

export const compressionInitializer = new CompressionInitializer().export()
