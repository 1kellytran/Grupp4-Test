const { Given, When, Then } = require('@wdio/cucumber-framework');

const baseUrl = "https://www.imdb.com/";

// Given I am on IMDB website from top-rated-steps

When(/^I click on the menu button$/, async () => {
    browser.setWindowSize(1000, 900);
	const button = await $('#imdbHeader-navDrawerOpen > svg');
   
    await button.click();
    
});

Then(/^I see different menu categories$/, async () => {
	const panel = await $('div[data-testid="panel-content"]');

    const categories = [
        "Movies", "TV Shows", "Watch", "Awards & Events",
        "Celebs", "Community"
    ];
    
    for (const category of categories) {
        expect(panel).toHaveTextContaining(category);
    }
	
});

Given(/^I am in the menu on IMDB website$/, async () => {
	await browser.url(baseUrl);
    await $('#imdbHeader-navDrawerOpen > svg').click();
    expect(await $('body').getAttribute('class')).toBe("Bh8XO_Pd8J6PRkh7ZT-a"); // The class resposible for showing the menu
});

When(/^I click the close button$/, async () => {
    const closeButton = await $('label[title="Close Navigation Drawer"]');
    await closeButton.click();
    
});

Then(/^The menu closes$/, async () => {
	expect(await $('body').getAttribute('class')).toBe(""); // The class showing the menu should be removed

    const menu = await $('div[data-testid="panel"]');
    const attribute = await menu.getAttribute('aria-hidden');
    
    expect(attribute).toBe("true"); // The panel is hidden
});


Given(/^I am in the menu$/, async () => {
	await browser.url(baseUrl);
    await $('#imdbHeader-navDrawerOpen > svg').click();
});

When(/^I click on TV Shows$/, async () => {
    await $('[for="nav-link-categories-tvshows"]').click();
});

When(/^I click on TV News$/, async () => {
    
	await $('=TV News')
        .click();

});

Then(/^I can view news related to TV$/, async () => {
    const pageTitle = await $('#main > section > header > h1').getText();
    const pageUrl = await browser.getUrl();

	expect(pageTitle).toBe("TV News");
    expect(pageUrl).toContain("https://www.imdb.com/news/tv/");
});