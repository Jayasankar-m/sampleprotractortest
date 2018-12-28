exports.config = {
    framework: 'mocha',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        specs: ['sampletest1.js','sampletest2.js']
    },
    mochaOpts: {
        timeout: 50000
    },     
    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 1800000,
    restartBrowserBetweenTests: true
};