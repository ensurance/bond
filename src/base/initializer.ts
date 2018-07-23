export default class Initializer {
  constructor() {}

  protected initialize(bond: any, settings: { [key: string]: any }): void {}

  public export() {
    return this.initialize;
  }
}
