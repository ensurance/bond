import Initializer from '../base/initializer';
import bodyParser from 'body-parser';

class BodyParserInitializer extends Initializer {
  protected initialize(bond: any, settings: { [key: string]: any }): void {
    bond.server.use(bodyParser.json());
    bond.server.use(bodyParser.urlencoded({
      extended: settings['extended']
    }));
  }
}

export const bodyParserInitializer = new BodyParserInitializer().export()
