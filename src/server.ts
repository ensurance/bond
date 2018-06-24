import bond from './bond';
import config from './config';
import { logger } from './utils';

const port: Number = bond.env.BOND_PORT;

bond.server.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}/`);
  logger.info(`Press CTRL-C to stop\n`)
});
