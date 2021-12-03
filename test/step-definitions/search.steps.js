const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the Google Search Page', async () => {
    await browser.url(`https://google.com/`);
    await $('#L2AGLb').click();
});

When(/^I enter the text "(.*)" in the "(.*)" field$/, async (text, id) => {
    await $('*[name="q"]').setValue(text);
    expect($('*[name="q"]')).toHaveValue(text);
});

When('I hit the Return key', async() => {
    await browser.keys("\uE007"); 
});

Then(/^I see results containing the text "(.*)" in their title or description$/, async(text) => {
    await expect($('body')).toHaveTextContaining(text);
    // await $('#nada').waitForDisplayed({ timeout: 10000 })
    
});