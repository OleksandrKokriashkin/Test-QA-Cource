const {Given, When} = require('cucumber');

Given('User prints comment {string}', (comment) => {
    return console.log(comment);
});

When('User navigates to the {string} page with url {string}', (_, url) => {
    return browser.get(url);
});