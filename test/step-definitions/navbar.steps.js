const { Given, When, Then } = require('@wdio/cucumber-framework');

const baseUrl = "https://www.imdb.com/";

Given(/^I am on the IMDB desktop site$/, async () => {
    await browser.url(baseUrl);

    const result = await browser.getUrl();
    expect(await result).toBe(baseUrl);
    // await browser.debug();
});

When(/^I click on the menu button$/, async () => {
    // browser.setWindowSize(1600, 1000);
    
	const button = await $('#imdbHeader-navDrawerOpen > svg');
    // const button = await $('#imdbHeader-navDrawerOpen--desktop > div');
    // const button = await $('#imdbHeader-navDrawerOpen > svg > path:nth-child(2)');
    

    await button.click();
    
});

Then(/^I see different menu categories$/, async () => {
	const panel = await $('div[data-testid="panel-content"]');

    const categories = [
        "Movies", "TV Shows", "Watch", "Awards & Events",
        "Celebs", "Community"
    ];
    
    for (const category of categories) {
        await expect(panel).toHaveTextContaining(category);
    }
	
});


// Given(/^I am on the IMDB mobile site$/, () => {
// 	return true;
// });

// When(/^I click on the menu button$/, async () => {
// 	return true;
// });

// Then(/^I see different menu categories$/, async () => {
// 	return true;
// });

Given(/^I am in the menu on IMDB website$/, async () => {
	await browser.url(baseUrl);
    await $('#imdbHeader-navDrawerOpen > svg').click();
    expect(await $('body').getAttribute('class')).toBe("Bh8XO_Pd8J6PRkh7ZT-a");
    // await browser.debug();
});

When(/^I click the close button$/, async () => {
	const closeButton = await $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > aside > div > div._3rHHDKyPLOjL8tGKHWMRza > label > svg > path:nth-child(2)');

    await closeButton.click();
    // await browser.debug();
});

Then(/^The menu closes$/, async () => {
	expect(await $('body').getAttribute('class')).toBe("");
});


Given(/^I am in the menu$/, async () => {
	await browser.url(baseUrl);
    await $('#imdbHeader-navDrawerOpen > svg').click();
});

When(/^I click on TV Shows$/, async () => {
	await $('//*[@id="imdbHeader"]/div[2]/aside/div/div[2]/div/div[2]/div[1]/span/label/span[2]').click();
    
});

When(/^I click on TV News$/, async () => {
	await $('//*[@id="imdbHeader"]/div[2]/aside/div/div[2]/div/div[2]/div[1]/span/div/div/ul/a[5]').click();
    await browser.debug();
});

Then(/^I can view news related to TV$/, async () => {
	
});


