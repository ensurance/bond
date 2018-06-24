import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import routes from './routes';

import {
  assetsInitializer,
  bodyParserInitializer,
  compressionInitializer,
  flashesInitializer,
  luscaInitializer,
  sessionInitializer
} from './initializers';

import {
  logger
} from './utils';

class Bond {
  public env: { [key: string]: any; } = process.env;
  public provider: any = express;
  public server: express.Application = express();

  private params: { [key: string]: any };

  constructor(params: { [key: string]: any }) {
    this.params = params;

    this.configureMiddlewre();
    this.mountRoutes();
  }

  private initialize(key: string, initialize: (server: any, settings: any) => void): void {
    const settings: { [key: string]: any } = this.params[key];

    if (settings['enabled']) {
      initialize(this, settings);
      logger.debug(`Initialize - ${key}`)
    };
  }

  private configureMiddlewre() {
    this.initialize('assets', assetsInitializer);
    this.initialize('bodyParser', bodyParserInitializer);
    this.initialize('compression', compressionInitializer);
    this.initialize('flashes', flashesInitializer);
    this.initialize('lusca', luscaInitializer);
    this.initialize('session', sessionInitializer);
  }

  private mountRoutes() {
    routes(this.server);
  }
}

export default new Bond(config);
