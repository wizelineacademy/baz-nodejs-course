const { appendFileSync } = require('fs');
const { getParseDate } = require('./dates');
const { defaultPath, files } = require('./constants');

const logLine = (date, type, message) => `${date} [${type}] ${message}\n`;

// eslint-disable-next-line no-async-promise-executor
const logger = async (type, message) => new Promise(async (resolve, reject) => {
  try {
    await appendFileSync(
      `${defaultPath}${files.logs}`,
      logLine(getParseDate(), type, message),
    );
    resolve();
  } catch (e) {
    reject(e.toString());
  }
});

module.exports = { logger };
