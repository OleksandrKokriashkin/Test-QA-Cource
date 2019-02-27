const {Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Then('Page title is equal to {string}', (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Then('{string} {string} is displayed', (_, locator, result) => {
    const elem = element(by.css(locator));
    return expect(elem.isDisplayed()).to.equal(true)
});
Then('{string} {string} with text {string} is displayed', (_, locator,text) => {
    const elem = element(by.cssContainingText(locator, text));
    return expect(elem.isDisplayed()).to.equal(true)
});