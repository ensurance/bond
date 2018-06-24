import path from 'path';

export function assetsInitializer(bond: any, settings: { [key: string]: any }): void {
  const publicPath: string = path.join(__dirname, settings['path']);

  bond.server.use(bond.provider.static(publicPath, {
    maxAge: settings['maxAge']
  }));
}
