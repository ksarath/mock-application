exports.config = {
    specs: ['src/protractor/**/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine',
    onPrepare: function() {
      browser.ignoreSynchronization = true;
    }
};
