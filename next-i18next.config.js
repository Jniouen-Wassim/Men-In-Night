const path = require('path');

console.log(path);

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr', 'it'],
    },
    localePath: path.resolve('./my/custom/path'),
  };