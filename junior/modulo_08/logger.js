const { appendFileSync } = require('fs');
const { getParseDate } = require('./dates');
const { defaultPath, files } = require('./constants');

const logLine = (date, type, message) => `${date} [${type}] ${message}\n`;

const logger = async (type, message) => {
  try {
    appendFileSync(
      `${defaultPath}${files.logs}`,
      logLine(getParseDate(), type, message),
    );
    return 'OK';
  } catch (e) {
    return e;
  }
};

module.exports = { logger };
