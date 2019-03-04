const {Given, When} = require('cucumber');

Given(' User navigates to the {string} page with url {string}', (comment) => {
    return console.log(comment);
});

When('User click "" {string}', (_, url) => {
    return browser.get(url);
});