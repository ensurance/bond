import compression from 'compression';

export function compressionInitializer(bond: any, settings: { [key: string]: any }): void {
  bond.server.use(compression());
}
