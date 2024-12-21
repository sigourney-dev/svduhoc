import {logger} from 'react-native-logs';

const log = logger.createLogger();

export const Logger = {
  info: (n: any) => log.info(n),
  error: (n: any) => log.error(n),
  warn: (n: any) => log.warn(n),
  debug: (n: any) => log.debug(n),
};
