import lusca from 'lusca';

export function luscaInitializer(bond: any, settings: { [key: string]: any }): void {
  bond.server.use(lusca.xframe(settings['xframe']));
  bond.server.use(lusca.xssProtection(settings['xssProtection']));
}
