const { Given, When, Then } = require('@wdio/cucumber-framework');

const baseUrl = "https://www.imdb.com/";

Given(/^I am on the IMDB site$/, async () => {
    await browser.url(baseUrl);

    const result = await browser.getUrl();
    expect(result).toBe(baseUrl);
});

When(/^I click on the menu button$/, async () => {

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
	const closeButton = await $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > aside > div > div._3rHHDKyPLOjL8tGKHWMRza > label > svg > path:nth-child(2)');
    // const closeButton = await $('label[title="Close Navigation Drawer"]');
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
	await $('//*[@id="imdbHeader"]/div[2]/aside/div/div[2]/div/div[2]/div[1]/span/label/span[2]').click();
});

When(/^I click on TV News$/, async () => {
    // await browser.debug();
	await $('//*[@id="imdbHeader"]/div[2]/aside/div/div[2]/div/div[2]/div[1]/span/div/div/ul/a[5]').click();
});

Then(/^I can view news related to TV$/, async () => {
    const pageTitle = await $('#main > section > header > h1').getText();
    const pageUrl = await browser.getUrl();

	expect(pageTitle).toBe("TV News");
    expect(pageUrl).toContain("https://www.imdb.com/news/tv/");
});