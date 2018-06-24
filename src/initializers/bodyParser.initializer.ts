import bodyParser from 'body-parser';

export function bodyParserInitializer(bond: any, settings: { [key: string]: any }): void {
  bond.server.use(bodyParser.json());
  bond.server.use(bodyParser.urlencoded({
    extended: settings['extended']
  }));
}
