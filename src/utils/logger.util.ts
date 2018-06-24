import winston from "winston";
import config from '../config';

const bondSettings = config['winston'];
const bondEnv = process.env.BOND_ENV;
export const logger = new (winston.Logger)({
  level: bondSettings['level'],
  transports: [
    new (winston.transports.Console)({ level: bondEnv === "production" ? "error" : "debug" }),
    new (winston.transports.File)({ filename: bondSettings['logfile'], level: bondSettings['level']})
  ]
});

