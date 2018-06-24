import flash from 'express-flash';

export function flashesInitializer(bond: any, settings: { [key: string]: any }): void {
  bond.server.use(flash());
}
