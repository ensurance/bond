import Util from '../base/util';
import config from '../config';
import winston from "winston";

class LoggerUtil extends Util {
  public export() {
    const settings = config['winston'];
    const env = process.env.BOND_ENV;

    return new (winston.Logger)({
      level: settings['level'],
      transports: [
        new (winston.transports.Console)({ level: env === "production" ? "error" : "debug" }),
        new (winston.transports.File)({ filename: settings['logfile'], level: settings['level']})
      ]
    });
  }
}

export const logger = new LoggerUtil().export()

